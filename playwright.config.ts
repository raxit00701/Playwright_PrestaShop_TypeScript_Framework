import { defineConfig } from '@playwright/test';
import * as path from 'path';

// ─────────────────────────────────────────────
//  DYNAMIC CONFIGURATION – toggle via ENV VARS
// ─────────────────────────────────────────────
//
//  EXECUTION MODE   : TEST_MODE=serial | parallel   (default: parallel)
//  HEADED / HEADLESS: HEADLESS=true | false          (default: true)
//  BROWSER CONTEXT  : INCOGNITO=true | false         (default: false)
//  TARGET ENV       : ENV=local | staging | prod     (default: local)
//
//  Examples (PowerShell):
//    $env:HEADLESS="false"; $env:TEST_MODE="serial"; npx playwright test --project=chrome
//    $env:INCOGNITO="true"; $env:HEADLESS="false"; npx playwright test
// ─────────────────────────────────────────────

// ── Helpers ──────────────────────────────────
const isParallel  = (process.env.TEST_MODE ?? 'parallel') === 'parallel';
const isHeadless  = (process.env.HEADLESS  ?? 'true')     === 'true';
const isIncognito = (process.env.INCOGNITO ?? 'false')    === 'true';
const targetEnv   = (process.env.ENV       ?? 'local') as 'local' | 'staging' | 'prod';

// ── Per-environment base URLs ─────────────────
const ENV_URLS: Record<typeof targetEnv, string> = {
    local:   'http://localhost:8081/',
    staging: 'https://staging.example.com',
    prod:    'https://www.example.com',
};

const BASE_URL = ENV_URLS[targetEnv];

// ── Full screen ───────────────────────────────
// THE KEY FIX: viewport must be `null` (not a size object) so Playwright
// does NOT override the browser window size. Combined with --start-maximized
// this gives a true full-screen window in headed mode.
// In headless mode there is no real window, so we use a large explicit size.
const VIEWPORT = isHeadless
    ? { width: 1920, height: 1080 }
    : null;                           // null = respect --start-maximized

// ── Allure reporter config ────────────────────
const allureReporter: [string, object] = [
    'allure-playwright',
    {
        outputFolder: 'allure-results',
        suiteTitle:   true,
        detail:       true,
        environmentInfo: {
            ENV:        targetEnv,
            BASE_URL:   BASE_URL,
            MODE:       isParallel ? 'parallel' : 'serial',
            HEADLESS:   String(isHeadless),
            INCOGNITO:  String(isIncognito),
        },
        categories: [
            {
                name:            'Product Defects',
                messageRegex:    '.*AssertionError.*',
                matchedStatuses: ['failed'],
            },
            {
                name:            'Test Defects',
                messageRegex:    '.*TimeoutError.*',
                matchedStatuses: ['broken'],
            },
            {
                name:            'Ignored Tests',
                matchedStatuses: ['skipped'],
            },
        ],
    },
];

// ─────────────────────────────────────────────
//  TEST GROUPING
// ─────────────────────────────────────────────
//
//  Groups map a short label to a glob pattern under ./tests/
//  Usage – run a single group (PowerShell):
//    $env:GROUP="api"; npx playwright test --project=chrome
//    $env:GROUP="core"; npx playwright test
//    $env:GROUP="net";  npx playwright test
//    $env:GROUP="data"; npx playwright test
//    $env:GROUP="gen";  npx playwright test
//
//  Leave GROUP unset (or set to "all") to run every test as usual.
// ─────────────────────────────────────────────

type GroupKey = 'core' | 'api' | 'net' | 'data' | 'gen' | 'all';

const TEST_GROUPS: Record<Exclude<GroupKey, 'all'>, string> = {
    core: 'tests/**/*.spec.ts',
    api:  'tests/**/*.spec.ts',
    net:  'tests/**/*.spec.ts',
    data: 'tests/**/*.spec.ts',
    gen:  'tests/**/*.spec.ts',
};

const activeGroup = ((process.env.GROUP ?? 'all') as GroupKey).toLowerCase() as GroupKey;

/**
 * Resolves the testMatch pattern(s) for the active group.
 * When GROUP=all (or not set) every test under ./tests/ is included,
 * which preserves the original default behaviour exactly.
 */
const resolvedTestMatch: string | string[] =
    activeGroup === 'all' || !(activeGroup in TEST_GROUPS)
        ? './tests/**/*.spec.ts'           // ← original catch-all (unchanged behaviour)
        : TEST_GROUPS[activeGroup as Exclude<GroupKey, 'all'>];

// ─────────────────────────────────────────────
//  MAIN CONFIG
// ─────────────────────────────────────────────
export default defineConfig({
    testDir: './tests',

    // ── Active group filter ───────────────────
    // When GROUP env var is set, only the matching glob is executed.
    // When GROUP is unset / "all", resolvedTestMatch falls back to the
    // original catch-all so nothing changes for existing pipelines.


    // ── Parallelism ───────────────────────────
    fullyParallel: isParallel,
    workers:       isParallel ? undefined : 1,

    // ── Retries ───────────────────────────────
    retries: process.env.CI ? 2 : 0,

    // ── Timeouts ─────────────────────────────
    timeout:      60_000,
    expect:       { timeout: 10_000 },

    // ── Reporters ────────────────────────────
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        allureReporter,
        ...(process.env.CI ? [['github'] as [string]] : []),
    ],

    // ── Global use ────────────────────────────
    use: {
        baseURL:           BASE_URL,
        trace:             'retain-on-failure',
        screenshot:        'only-on-failure',
        video:             'retain-on-failure',
        actionTimeout:     15_000,
        navigationTimeout: 30_000,
    },

    // ── Browser projects ─────────────────────
    projects: [

        // ── Chrome ────────────────────────────────────────────────────────────
        // ⚠️  Do NOT spread devices['Desktop Chrome'] — it hardcodes a small
        //     viewport (1280x720) which silently overrides viewport:null and
        //     breaks --start-maximized.
        {
            name: 'chrome',
            use: {
                browserName: 'chromium',
                channel:     'chrome',
                viewport:    VIEWPORT,
                launchOptions: {
                    headless: isHeadless,
                    args: [
                        '--start-maximized',
                        '--disable-infobars',
                        '--no-default-browser-check',
                        ...(isIncognito ? ['--incognito'] : []),
                    ],
                },
            },
        },

        // ── Firefox ───────────────────────────────────────────────────────────
        {
            name: 'firefox',
            use: {
                browserName: 'firefox',
                viewport:    VIEWPORT,
                launchOptions: {
                    headless: isHeadless,
                    args: isIncognito ? ['-private'] : [],
                    firefoxUserPrefs: {
                        'browser.startup.maximized': true,
                    },
                },
            },
        },

        // ── Edge ──────────────────────────────────────────────────────────────
        {
            name: 'edge',
            use: {
                browserName: 'chromium',
                channel:     'msedge',
                viewport:    VIEWPORT,
                launchOptions: {
                    headless: isHeadless,
                    args: [
                        '--start-maximized',
                        '--disable-infobars',
                        '--no-default-browser-check',
                        ...(isIncognito ? ['--inprivate'] : []),
                    ],
                },
            },
        },

        // ── WebKit / Safari ───────────────────────────────────────────────────
        // WebKit ignores --start-maximized; large explicit viewport is the workaround.
        {
            name: 'webkit',
            use: {
                browserName: 'webkit',
                viewport:    { width: 1920, height: 1080 },
                launchOptions: {
                    headless: isHeadless,
                },
            },
        },

    ],

    // ── Output ────────────────────────────────
    outputDir: path.join('test-results'),
});
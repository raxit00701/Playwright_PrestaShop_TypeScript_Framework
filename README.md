cat > /mnt/user-data/outputs/README_Playwright.md << 'ENDOFFILE'
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:03001C,30:2B0548,60:7B2FBE,100:00D4FF&height=230&section=header&text=PLAYWRIGHT%20PRESTASHOP&fontSize=52&fontColor=ffffff&fontAlignY=38&fontAlign=50&desc=Enterprise-Grade%20TypeScript%20Test%20Automation%20Framework&descAlignY=60&descSize=17&descColor=C8B8FF&animation=fadeIn" width="100%"/>

<br/>

<!-- BADGE ROW 1 — CORE STACK -->
<img src="https://img.shields.io/badge/Playwright-v1.x-2EAD33?style=for-the-badge&logo=playwright&logoColor=white"/>
&nbsp;
<img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
&nbsp;
<img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
&nbsp;
<img src="https://img.shields.io/badge/Allure-Reports-FF6B35?style=for-the-badge&logo=qameta&logoColor=white"/>
&nbsp;
<img src="https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=for-the-badge&logo=jenkins&logoColor=white"/>

<br/><br/>

<!-- BADGE ROW 2 — BROWSERS -->
<img src="https://img.shields.io/badge/Chrome-Supported-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white"/>
&nbsp;
<img src="https://img.shields.io/badge/Firefox-Supported-FF7139?style=for-the-badge&logo=firefox&logoColor=white"/>
&nbsp;
<img src="https://img.shields.io/badge/Edge-Supported-0078D7?style=for-the-badge&logo=microsoftedge&logoColor=white"/>
&nbsp;
<img src="https://img.shields.io/badge/WebKit-Supported-000000?style=for-the-badge&logo=apple&logoColor=white"/>
&nbsp;
<img src="https://img.shields.io/badge/License-Proprietary%20%C2%A9%202026%20Raxit%20Sharma-B22222?style=for-the-badge&logo=opensourceinitiative&logoColor=white"/>

<br/><br/>

<!-- STATS ROW -->
<table>
<tr>
<td align="center"><img src="https://img.shields.io/badge/TEST%20CASES-48-7B2FBE?style=flat-square&labelColor=1a1a2e"/></td>
<td align="center"><img src="https://img.shields.io/badge/BROWSERS-5-00D4FF?style=flat-square&labelColor=1a1a2e"/></td>
<td align="center"><img src="https://img.shields.io/badge/TEST%20FILES-10-2EAD33?style=flat-square&labelColor=1a1a2e"/></td>
<td align="center"><img src="https://img.shields.io/badge/REPORTS-3x-FF6B35?style=flat-square&labelColor=1a1a2e"/></td>
<td align="center"><img src="https://img.shields.io/badge/API%20HELPERS-5-FF007F?style=flat-square&labelColor=1a1a2e"/></td>
</tr>
</table>

<br/>

> **Multi-browser · Multi-environment · API-assisted · Network mocking · Jenkins parameterized**
>
> *Built for reliability, speed, and maintainability at scale — not a demo, not a tutorial.*

<br/>

</div>

---

## 📋 Table of Contents

| # | Section | # | Section |
|:---:|:---|:---:|:---|
| 01 | [🏗️ Framework Architecture](#️-framework-architecture) | 09 | [🗂️ Page Object Factory Model](#️-page-object-factory-model) |
| 02 | [✨ Key Features](#-key-features) | 10 | [📊 Data-Driven Testing](#-data-driven-testing) |
| 03 | [📁 Project Structure](#-project-structure) | 11 | [🎬 Failure Artifacts](#-failure-artifacts) |
| 04 | [🚀 Quick Start](#-quick-start) | 12 | [📈 Reporting Suite](#-reporting-suite) |
| 05 | [⚙️ Dynamic Configuration](#️-dynamic-configuration) | 13 | [🔧 Jenkins CI/CD](#-jenkins-cicd-integration) |
| 06 | [🌐 Multi-Browser Execution](#-multi-browser-execution) | 14 | [♻️ Retry Mechanism](#️-retry-mechanism) |
| 07 | [🧪 Test Groups & Tagging](#-test-groups--tagging) | 15 | [📜 Test Inventory](#-test-inventory) |
| 08 | [📡 API Layer](#-api-layer) | 16 | [📜 License](#-license) |

---

## 🏗️ Framework Architecture

```
╔═════════════════════════════════════════════════════════════════════════╗
║              PLAYWRIGHT PRESTASHOP — FRAMEWORK OVERVIEW               ║
╠══════════════╦══════════════╦══════════════╦══════════════════════════╣
║   🧪 TESTS/  ║   🗂️  POM/   ║   📡  API/   ║      🔌 NETWORK/        ║
║  Test Specs  ║  Page Objs  ║ API Helpers  ║  Intercept & Mock        ║
║  (.spec.ts)  ║ (Locators)  ║ (Auth/Cart)  ║  (Route Handlers)        ║
╠══════════════╩══════════════╩══════════════╩══════════════════════════╣
║                         📦  DATA/  (JSON)                            ║
║               Test Data  ·  Order Data  ·  User Credentials          ║
╠═════════════════════════════════════════════════════════════════════════╣
║                      ⚙️  playwright.config.ts                        ║
║        ENV · BROWSER · HEADLESS · INCOGNITO · WORKERS · GROUP        ║
╠══════════════╦═══════════════════════════╦══════════════════════════╣
║  📊 Allure   ║   🎭 Playwright HTML      ║   📋 Jenkins CI           ║
║   Report     ║       Report              ║   Parameterized           ║
╚══════════════╩═══════════════════════════╩══════════════════════════╝
```

---

## ✨ Key Features

<div align="center">

| 🔷 Feature | 📝 Description |
|:---|:---|
| 🌍 **Dynamic Environments** | Switch between `local`, `staging`, and `prod` via a single env var |
| 🌐 **Multi-Browser** | Chrome, Firefox, Edge, WebKit — run one or all simultaneously |
| 🕵️ **Incognito / Normal** | Toggle private browsing mode dynamically — no code changes |
| 👁️ **Headed / Headless** | Fully controlled via `HEADLESS` environment variable |
| ⚡ **Serial / Parallel** | Worker count and execution mode toggled via `TEST_MODE` + `WORKERS` |
| 🔌 **Network Mocking** | Intercept & replace API responses with fully controlled payloads |
| 🏭 **Page Object Factory** | Modular, reusable locator classes — one update, all tests adapt |
| 📡 **API-Assisted Tests** | Login, signup & cart via REST — no slow UI boilerplate |
| 🗂️ **Data-Driven** | JSON-based test data for users, orders, and products |
| 🏷️ **Test Grouping** | Tag-based groups: `@core` `@api` `@net` `@data` `@gen` |
| 🎬 **Failure Artifacts** | Auto screenshot + video + Playwright trace on every failure |
| 📊 **Triple Reporting** | Allure + Playwright HTML + Live console list reporter |
| 🔧 **Jenkins Parameterized** | Full CI pipeline with dynamic parameter injection |
| ♻️ **Smart Retries** | 2× retries on CI, 0 locally — fail fast in dev, stable in CI |
| 🔑 **Token Extraction** | Dynamic CSRF/cart token parsed live from HTML for API flows |

</div>

---

## 📁 Project Structure

```
playwright-prestashop/
│
├── 🧪 tests/                         # All test specifications — 48 test cases
│   ├── addToCart.spec.ts             # Add-to-cart flows & quantity management
│   ├── Courselarrows.spec.ts         # Carousel / slider navigation tests
│   ├── data_order.spec.ts            # Data-driven order placement
│   ├── filter.spec.ts                # Product filter, sort & category tests
│   ├── forgotpassword.spec.ts        # Password recovery flow
│   ├── login.spec.ts                 # Authentication — valid & invalid scenarios
│   ├── mockcart.spec.ts              # Network-mocked cart pricing validation
│   ├── order.spec.ts                 # End-to-end order placement
│   ├── search.spec.ts                # Search functionality & autocomplete
│   └── signup.spec.ts                # User registration & validation
│
├── 📡 API/                           # Programmatic API helper layer
│   ├── apiLogin.ts                   # REST-based authentication + cookie injection
│   ├── signup.ts                     # Programmatic user registration
│   ├── addToCart.ts                  # REST cart operations
│   ├── product.ts                    # Product page token extraction
│   └── search.ts                     # Search API helpers
│
├── 🗂️ POM/                           # Page Object Factory Model
│   ├── address.ts                    # Address page locators & actions
│   └── filter.ts                     # Filter page locators & actions
│
├── 🔌 NETWORK/                       # Network interception layer
│   └── Cart.ts                       # Cart route mocking with full mock payload
│
├── 📦 DATA/                          # Externalized test data (JSON)
│   ├── test-data.json                # User credentials & product data
│   └── order.json                    # Order-specific test input data
│
├── 📊 allure-results/                # Raw Allure JSON results (per run)
├── 📊 allure-report/                 # Generated Allure HTML report
├── 🎭 playwright-report/             # Playwright built-in HTML report
├── 🎬 test-results/                  # Failure artifacts: screenshots/video/trace
│
├── playwright.config.ts              # Master framework configuration
├── package.json                      # Dependencies & npm scripts
└── .github/workflows/playwright.yml  # GitHub Actions workflow
```

---

## 🚀 Quick Start

### Prerequisites

```
✔  Node.js 18+          → https://nodejs.org/
✔  npm / npx            → bundled with Node.js
✔  Allure CLI           → npm install -g allure-commandline
✔  PrestaShop instance  → running at http://localhost:8081/
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/playwright-prestashop.git
cd playwright-prestashop

# 2. Install Node dependencies
npm install

# 3. Install all Playwright browser binaries
npx playwright install
```

### Run Tests — At a Glance

```bash
# Run everything (default config)
npx playwright test

# Single browser
npx playwright test --project=chrome
npx playwright test --project=firefox
npx playwright test --project=edge
npx playwright test --project=webkit

# Headed mode (watch the browser)
HEADLESS=false npx playwright test --project=chrome

# Specific test group
npx playwright test --grep "@core"
npx playwright test --grep "@net"
```

---

## ⚙️ Dynamic Configuration

The entire framework is driven by **environment variables** — swap browser, environment, group, and mode without touching a single config file.

<div align="center">

| ENV Variable | Options | Default | What It Controls |
|:---:|:---|:---:|:---|
| `ENV` | `local` · `staging` · `prod` | `local` | Target deployment environment |
| `HEADLESS` | `true` · `false` | `true` | Browser visibility |
| `INCOGNITO` | `true` · `false` | `false` | Private / incognito browsing |
| `TEST_MODE` | `serial` · `parallel` | `parallel` | Execution strategy |
| `WORKERS` | `1` – `n` | CPU-based | Parallel worker thread count |
| `GROUP` | `core` · `api` · `net` · `data` · `gen` · `all` | `all` | Test tag filter |
| `BROWSER` | `chrome` · `firefox` · `edge` · `webkit` · `all` | `all` | Browser project selection |

</div>

### Environment URL Mapping

```typescript
// playwright.config.ts
const ENV_URLS: Record<string, string> = {
    local:   'http://localhost:8081/',
    staging: 'https://staging.example.com',
    prod:    'https://www.example.com',
};
```

### PowerShell Runtime Examples

```powershell
# Headed Chrome on staging
$env:HEADLESS="false"; $env:ENV="staging"; npx playwright test --project=chrome

# Incognito Firefox, serial
$env:INCOGNITO="true"; $env:TEST_MODE="serial"; npx playwright test --project=firefox

# API group only on Edge
$env:GROUP="api"; npx playwright test --project=edge

# Full parallel suite, headless, local
npx playwright test
```

---

## 🌐 Multi-Browser Execution

Five browser configurations — all with full-screen maximisation support.

<div align="center">

| Browser | Engine | Screen Mode | Notes |
|:---:|:---|:---:|:---|
| 🟦 **Chrome** | Chromium | Maximized | `--start-maximized` · Incognito-ready |
| 🟧 **Firefox** | Gecko | Maximized | `browser.startup.maximized` userPref |
| 🟦 **Edge** | Chromium | Maximized | `--start-maximized` · InPrivate-ready |
| ⬛ **WebKit** | WebKit | 1920×1080 | Explicit viewport for Safari parity |

</div>

```typescript
// playwright.config.ts — browser project definitions
projects: [
  {
    name: 'chrome',
    use: { browserName: 'chromium', channel: 'chrome', args: ['--start-maximized'] }
  },
  {
    name: 'firefox',
    use: { browserName: 'firefox', firefoxUserPrefs: { 'browser.startup.maximized': true } }
  },
  {
    name: 'edge',
    use: { browserName: 'chromium', channel: 'msedge', args: ['--start-maximized'] }
  },
  {
    name: 'webkit',
    use: { browserName: 'webkit', viewport: { width: 1920, height: 1080 } }
  }
]
```

> **Full-Screen Fix:** `viewport: null` is applied for Chromium/Firefox in headed mode so `--start-maximized` is not silently overridden by Playwright's default viewport injection.

---

## 🧪 Test Groups & Tagging

Every test is tagged for **selective, surgical execution** — run exactly what you need.

<div align="center">

| 🏷️ Tag | Group Name | What It Covers | Example Tests |
|:---:|:---|:---|:---|
| `@core` | Core Smoke | Critical happy-path user journeys | Login, Signup, Search, Order |
| `@gen` | General UI | Feature & interaction tests | Filter, Carousel, Forgot Password |
| `@net` | Network Mock | Intercepted & mocked API responses | Cart mock, Pricing validation |
| `@data` | Data-Driven | JSON-parametrized test runs | Multi-dataset order placement |
| `@api` | API-First | Programmatic setup via REST | API login, API cart, API search |

</div>

### Filtering by Group

```powershell
# Via env var (Jenkins-friendly)
$env:GROUP="net";  npx playwright test
$env:GROUP="core"; npx playwright test

# Via Playwright grep (direct)
npx playwright test --grep "@gen"
npx playwright test --grep "@api"
npx playwright test --grep "@data"
```

---

## 📡 API Layer

The `API/` folder provides **programmatic REST helpers** that bypass the UI for test setup — keeping each test laser-focused on the feature under test.

### Why API-First Setup?

<div align="center">

| Without API Helpers | With API Helpers |
|:---|:---|
| UI login → ~5–8 seconds per test | REST login → ~300ms per test |
| Flaky form interactions in setup | Deterministic, network-level setup |
| Login test code in every spec | Single reusable `apiLogin()` call |
| Hard to isolate feature under test | Tests start exactly at the right state |

</div>

### Dynamic Token Extraction

The framework extracts live CSRF/cart session tokens directly from HTML — no hardcoding:

```typescript
// API/product.ts
export async function openProduct(apiContext: APIRequestContext) {
    const response = await apiContext.get('/1-1-hummingbird-printed-t-shirt.html');
    const html     = await response.text();

    // Live regex extraction — works with any session
    const tokenMatch = html.match(/name="token"\s+value="(.*?)"/);
    if (!tokenMatch) throw new Error('Cart token not found in HTML response');

    return tokenMatch[1]; // ← Returns fresh session token
}
```

### Usage in Tests

```typescript
import { apiSignup } from '../API/signup';
import { apiLogin }  from '../API/apiLogin';

test('@core complete order flow', async ({ page }) => {
    // API creates a fresh user — no UI signup form
    const user = await apiSignup();

    // Injects authenticated cookies directly into the browser context
    await apiLogin(page, user.email, user.password);

    // ✅ Test begins already authenticated — focus is on the order flow
    await page.goto('/order');
    // ...assertions
});
```

---

## 🔌 Network Interception & Mocking

`NETWORK/Cart.ts` intercepts live HTTP traffic and returns controlled mock responses — enabling **price validation without any backend dependency**.

### Interception Flow

```
Browser → POST /cart?add=1&action=update
               ↓
       🔌 Route Interceptor
               ↓
   isAddToCart? ──YES──▶  fulfill( cartMockResponse )  →  €119.00 total
                └──NO───▶  route.continue()             →  pass through
```

### Implementation

```typescript
// NETWORK/Cart.ts
export async function mockCart(context: BrowserContext): Promise<void> {
    await context.route('**/cart**', async (route: Route) => {
        const params = new URLSearchParams(route.request().postData() ?? '');

        const isAddToCart =
            route.request().method() === 'POST' &&
            params.get('add')    === '1'      &&
            params.get('action') === 'update';

        if (isAddToCart) {
            await route.fulfill({
                status:      200,
                contentType: 'application/json',
                body:        JSON.stringify(cartMockResponse),
            });
        } else {
            await route.continue(); // Non-cart requests pass through
        }
    });
}
```

### Assertions on Mocked Response

```typescript
await expect(modal).toContainText('Mug The adventure begins');
await expect(modal).toContainText('€11.90');              // Unit price (mocked)
await expect(modal).toContainText('Quantity: 10');
await expect(modal).toContainText('Subtotal: €119.00');
await expect(modal).toContainText('Total (tax incl.) €119.00');
await expect(modal).toContainText('There are 10 items in your cart.');
```

---

## 🗂️ Page Object Factory Model

Locators live in `POM/` classes — test code stays readable, locator changes happen in exactly one place.

```typescript
// POM/filter.ts
export class FilterPage {
    readonly accessoriesLink: Locator;
    readonly sortDropdown:    Locator;
    readonly priceHighToLow:  Locator;
    readonly nameAToZ:        Locator;
    readonly prices:          Locator;
    readonly productTitles:   Locator;

    constructor(page: Page) {
        this.accessoriesLink = page.locator('a[data-category="accessories"]');
        this.sortDropdown    = page.locator('.products-sort-order');
        this.priceHighToLow  = page.locator('[data-sort="price:desc"]');
        this.nameAToZ        = page.locator('[data-sort="name:asc"]');

        // Parent → child chaining for robust, scoped selectors
        this.prices        = page.locator('.product-miniature .price');
        this.productTitles = page.locator('.product-miniature .product-title');
    }
}
```

### Usage in Tests

```typescript
test('@gen Filter — sort by price descending', async ({ page }) => {
    const filter = new FilterPage(page); // ← Factory instantiation

    await filter.accessoriesLink.click();
    await filter.sortDropdown.click();
    await filter.priceHighToLow.click();

    const prices  = await filter.prices.allTextContents();
    const numeric = prices.map(p => parseFloat(p.replace('€', '')));

    // Validate descending price order
    expect(numeric).toEqual([...numeric].sort((a, b) => b - a));
});
```

**Why POM matters here:**
- One locator change → all tests that use it are automatically updated
- Test code reads like a specification, not a selector soup
- Failures point to the page method — not a raw `locator()` call buried in test logic

---

## 📊 Data-Driven Testing

Test data is fully externalized to `DATA/` JSON files — test logic stays clean, data is trivially maintainable.

### `DATA/test-data.json`

```json
{
  "users": [
    { "email": "test@example.com",  "password": "Test@123" },
    { "email": "test2@example.com", "password": "Test@456" }
  ],
  "products": [
    { "name": "Hummingbird T-Shirt", "url": "/1-1-hummingbird-printed-t-shirt.html" },
    { "name": "Mug Adventure",       "url": "/5-mug-the-adventure-begins.html" }
  ]
}
```

### `DATA/order.json`

```json
{
  "firstName": "John",
  "lastName":  "Doe",
  "address":   "123 Test Street",
  "city":      "Test City",
  "postcode":  "12345",
  "phone":     "+44 7000 000000"
}
```

### Usage in Test Specs

```typescript
import orderData from '../DATA/order.json';
import testData  from '../DATA/test-data.json';

// Parametrized across all users in JSON
for (const user of testData.users) {
    test(`@data order as ${user.email}`, async ({ page }) => {
        await apiLogin(page, user.email, user.password);
        await page.fill('[name="firstname"]', orderData.firstName);
        await page.fill('[name="address1"]',  orderData.address);
        // ...
    });
}
```

> Add new test scenarios by editing a JSON file — no TypeScript changes required.

---

## 🎬 Failure Artifacts

On every test failure, four artifact types are **automatically captured** and saved — ready for Allure attachment or local review.

<div align="center">

| 📁 Artifact | Format | Trigger | Use Case |
|:---:|:---|:---:|:---|
| 📸 **Screenshot** | `.png` | `only-on-failure` | Exact screen state at point of failure |
| 🎥 **Video** | `.webm` | `retain-on-failure` | Full test session recording |
| 🔍 **Trace** | `.zip` | `retain-on-failure` | Playwright DevTools — step-by-step replay |
| 📝 **Error Context** | `.md` | Always | Error message + stack trace |

</div>

### Artifact Location

```
test-results/
└── forgotpassword--gen-Forgot-Password-firefox/
    ├── test-failed-1.png      ← Screenshot at exact failure point
    ├── video.webm             ← Full session recording
    ├── trace.zip              ← Open with: npx playwright show-trace trace.zip
    └── error-context.md       ← Error message and stack trace
```

### Configuration in `playwright.config.ts`

```typescript
use: {
    trace:             'retain-on-failure',
    screenshot:        'only-on-failure',
    video:             'retain-on-failure',
    actionTimeout:     15_000,
    navigationTimeout: 30_000,
}
```

---

## 📈 Reporting Suite

Three complementary reports are generated **simultaneously** after every run.

### 📊 Allure Report

Rich interactive HTML with history, trends, failure categories, and environment metadata.

```bash
# Generate from raw results
npx allure generate allure-results --clean -o allure-report

# Open in browser
npx allure open allure-report

# Or serve live
npx allure serve allure-results
```

**Allure failure categories:**

| 🔴 Category | Trigger | Meaning |
|:---|:---|:---|
| **Product Defects** | `AssertionError` | Real application bugs |
| **Test Defects** | `TimeoutError` | Infrastructure / timing issues |
| **Ignored Tests** | `test.skip()` | Intentionally skipped |

**Auto-injected environment properties:**

```
ENV        = local | staging | prod
BASE_URL   = http://localhost:8081/
MODE       = parallel | serial
HEADLESS   = true | false
INCOGNITO  = true | false
```

### 🎭 Playwright HTML Report

```bash
npx playwright show-report
```

Built-in Playwright report with test timeline, retry waterfall, and inline artifact viewer.

### 📋 Console List Reporter

Live, colour-coded terminal output during execution — see pass/fail in real time without opening a browser.

---

## 🔧 Jenkins CI/CD Integration

A fully parameterized Jenkins pipeline — trigger any combination of browser, environment, group, and mode directly from the Jenkins UI.

### Jenkins Build Parameters

<div align="center">

| ⚙️ Parameter | Type | Options | Default |
|:---:|:---|:---|:---:|
| `ENV` | Choice | `local` · `staging` · `prod` | `local` |
| `BROWSER` | Choice | `chrome` · `firefox` · `edge` · `webkit` · `all` | `chrome` |
| `GROUP` | Choice | `all` · `core` · `api` · `net` · `data` · `gen` | `all` |
| `HEADLESS` | Boolean | `true` · `false` | `true` |
| `INCOGNITO` | Boolean | `true` · `false` | `false` |
| `WORKERS` | String | `1` – `n` | `4` |

</div>

### Jenkins Shell Script

```batch
cd "C:\Users\raxit\IdeaProjects\playwright Prestashop"

set HEADLESS=%HEADLESS%
set INCOGNITO=%INCOGNITO%
set ENV=%ENV%

:: Translate GROUP parameter to --grep flag
if "%GROUP%"=="all" (
    set TAG_CMD=
) else (
    set TAG_CMD=--grep "@%GROUP%"
)

:: Translate BROWSER parameter to --project flag
if "%BROWSER%"=="all" (
    set PROJECTS=
) else (
    set PROJECTS=--project=%BROWSER%
)

:: Execute tests
npx playwright test %PROJECTS% --workers=%WORKERS% %TAG_CMD%
if %ERRORLEVEL% NEQ 0 exit /b %ERRORLEVEL%
```

### Jenkins Post-Build: Report Publishing

```groovy
post {
    always {
        allure([
            includeProperties: true,
            reportBuildPolicy: 'ALWAYS',
            results: [[path: 'allure-results']]
        ])
        publishHTML([
            reportDir:   'playwright-report',
            reportFiles: 'index.html',
            reportName:  'Playwright HTML Report'
        ])
        archiveArtifacts artifacts: 'test-results/**/*.png, test-results/**/*.webm, test-results/**/*.zip',
                         allowEmptyArchive: true
    }
    failure {
        emailext(
            subject: "❌ Playwright FAILED — ${params.BROWSER} / ${params.ENV} — #${env.BUILD_NUMBER}",
            body:    "Build ${env.BUILD_NUMBER} failed.\nAllure: ${env.BUILD_URL}allure\nConsole: ${env.BUILD_URL}console",
            to:      'qa-team@yourcompany.com'
        )
    }
    success {
        emailext(
            subject: "✅ Playwright PASSED — ${params.BROWSER} / ${params.ENV} — #${env.BUILD_NUMBER}",
            body:    "All tests passed.\nAllure: ${env.BUILD_URL}allure",
            to:      'qa-team@yourcompany.com'
        )
    }
}
```

### Common Jenkins Run Configurations

```bash
# Smoke test — Chrome headless on staging
ENV=staging  BROWSER=chrome  GROUP=core  HEADLESS=true  WORKERS=4

# Full regression — all browsers, parallel
ENV=prod     BROWSER=all     GROUP=all   HEADLESS=true  WORKERS=8

# Network tests debug — headed Firefox
ENV=local    BROWSER=firefox GROUP=net   HEADLESS=false WORKERS=1

# API group — incognito Chrome
ENV=local    BROWSER=chrome  GROUP=api   INCOGNITO=true WORKERS=2
```

---

## ♻️ Retry Mechanism

Intelligent context-aware retries: aggressive in CI, zero locally so developers see real errors immediately.

```typescript
// playwright.config.ts
retries: process.env.CI ? 2 : 0,
```

<div align="center">

| Context | Retries | Behaviour |
|:---:|:---:|:---|
| 🏭 **CI (Jenkins / GitHub Actions)** | 2 | Network jitter and timing flakiness auto-recover |
| 💻 **Local Development** | 0 | Fail fast — no retry noise masking real bugs |

</div>

Retry artifacts are namespaced automatically so every attempt is independently reviewable:

```
test-results/
├── forgotpassword-firefox/           ← Attempt 1
├── forgotpassword-firefox-retry1/    ← Attempt 2
└── forgotpassword-firefox-retry2/    ← Attempt 3 (final)
```

---

## 📜 Test Inventory

**48 test cases across 10 spec files** — tagged, grouped, and fully traceable.

<div align="center">

| 📄 Spec File | 🏷️ Tag | 🔢 Tests | 📋 Coverage |
|:---|:---:|:---:|:---|
| `login.spec.ts` | `@core` | 5 | Valid login · invalid credentials · session persistence |
| `signup.spec.ts` | `@core` | 5 | Registration · validation · duplicate email handling |
| `search.spec.ts` | `@core` | 4 | Keyword search · no results · autocomplete |
| `addToCart.spec.ts` | `@core` | 6 | Add products · quantity update · remove from cart |
| `order.spec.ts` | `@core` | 6 | Guest checkout · registered checkout · payment flow |
| `filter.spec.ts` | `@gen` | 5 | Sort by price · name A–Z · category filter |
| `forgotpassword.spec.ts` | `@gen` | 3 | Password reset · invalid email handling |
| `Courselarrows.spec.ts` | `@gen` | 4 | Carousel navigation · slide content validation |
| `mockcart.spec.ts` | `@net` | 5 | Mocked pricing · quantity × price · subtotal validation |
| `data_order.spec.ts` | `@data` | 5 | JSON-driven order placement · multi-dataset scenarios |
| | | **48** | |

</div>

---

## 🛠️ NPM Scripts

```json
{
  "scripts": {
    "test":             "npx playwright test",
    "test:chrome":      "npx playwright test --project=chrome",
    "test:firefox":     "npx playwright test --project=firefox",
    "test:edge":        "npx playwright test --project=edge",
    "test:webkit":      "npx playwright test --project=webkit",
    "test:headed":      "cross-env HEADLESS=false npx playwright test",
    "test:serial":      "cross-env TEST_MODE=serial npx playwright test",
    "test:core":        "npx playwright test --grep @core",
    "test:api":         "npx playwright test --grep @api",
    "test:net":         "npx playwright test --grep @net",
    "allure:generate":  "allure generate allure-results --clean -o allure-report",
    "allure:open":      "allure open allure-report",
    "allure:serve":     "allure serve allure-results",
    "report":           "npx playwright show-report"
  }
}
```

---

## 📦 Dependencies

```json
{
  "devDependencies": {
    "@playwright/test":     "^1.x",
    "typescript":           "^5.x"
  },
  "dependencies": {
    "allure-playwright":    "^3.x",
    "allure-js-commons":    "^3.x",
    "@zerostep/playwright": "^x.x",
    "md5":                  "^x.x",
    "cross-env":            "^7.x"
  }
}
```

---

## 🤝 Contributing

1. **Fork** the repository
2. **Branch** off: `git checkout -b feature/new-test-suite`
3. **Follow** the existing POM + API layer conventions
4. **Tag** every test with the appropriate `@group` annotation
5. **Verify** all tests pass locally: `npx playwright test`
6. **Commit** clearly: `git commit -m "Add: @net mock for checkout pricing edge case"`
7. **Push** and open a **Pull Request** with a description of what and why

---

## 📜 License

<div align="center">

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║                   PROPRIETARY SOFTWARE LICENSE                   ║
║                                                                  ║
║              All Rights Reserved © 2026 Raxit Sharma             ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

</div>

This project is **proprietary and protected by copyright**.

**All Rights Reserved © 2026 Raxit Sharma**

No permission is granted to use, copy, modify, distribute, or create derivative works from this code without explicit written permission from the author.

Unauthorized use, reproduction, or distribution of this software, in whole or in part, may result in severe civil and criminal penalties and will be prosecuted to the maximum extent possible under the law.

For licensing inquiries, contact the author directly.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00D4FF,40:7B2FBE,70:2B0548,100:03001C&height=140&section=footer&text=Built%20by%20Raxit%20Sharma%20%C2%A9%202026&fontSize=18&fontColor=C8B8FF&fontAlignY=55&desc=Playwright%20%C2%B7%20TypeScript%20%C2%B7%20Built%20for%20scale%2C%20speed%20and%20reliability&descSize=13&descColor=7B9CFF&descAlignY=78" width="100%"/>

</div>






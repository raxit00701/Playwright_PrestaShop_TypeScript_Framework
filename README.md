<div align="center">

<!-- HERO BANNER -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=200&section=header&text=Playwright%20PrestaShop&fontSize=48&fontColor=ffffff&fontAlignY=38&desc=Enterprise-Grade%20TypeScript%20Test%20Automation%20Framework&descAlignY=58&descSize=16&descColor=a78bfa" width="100%"/>

<br/>

[![Playwright](https://img.shields.io/badge/Playwright-v1.x-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Allure](https://img.shields.io/badge/Allure-Report-FF6B6B?style=for-the-badge&logo=data:image/svg+xml;base64,)](https://allurereport.org/)
[![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=for-the-badge&logo=jenkins&logoColor=white)](https://www.jenkins.io/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

<br/>

**48 Test Cases** · **4 Browsers** · **Multi-Environment** · **API-Assisted** · **Jenkins Parameterized**

<br/>

</div>

---

## 📋 Table of Contents

- [🏗️ Framework Architecture](#️-framework-architecture)
- [✨ Key Features](#-key-features)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start](#-quick-start)
- [⚙️ Dynamic Configuration](#️-dynamic-configuration)
- [🌐 Multi-Browser Execution](#-multi-browser-execution)
- [🧪 Test Groups & Tagging](#-test-groups--tagging)
- [📡 API Layer](#-api-layer)
- [🔌 Network Interception & Mocking](#-network-interception--mocking)
- [🗂️ Page Object Factory Model](#️-page-object-factory-model)
- [📊 Data-Driven Testing](#-data-driven-testing)
- [🎬 Failure Artifacts](#-failure-artifacts)
- [📈 Reporting Suite](#-reporting-suite)
- [🔧 Jenkins CI/CD Integration](#-jenkins-cicd-integration)
- [♻️ Retry Mechanism](#️-retry-mechanism)
- [📜 Test Inventory](#-test-inventory)

---

## 🏗️ Framework Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                    PLAYWRIGHT PRESTASHOP FRAMEWORK                  │
├──────────────┬──────────────┬──────────────┬────────────────────────┤
│   TESTS/     │    POM/      │    API/      │      NETWORK/          │
│  Test Specs  │  Page Objs  │ API Helpers  │  Intercept & Mock      │
│  (.spec.ts)  │  (Locators) │ (Auth/Cart)  │  (Route Handlers)      │
├──────────────┴──────────────┴──────────────┴────────────────────────┤
│                        DATA/ (JSON)                                 │
│              Test Data · Order Data · User Data                     │
├─────────────────────────────────────────────────────────────────────┤
│                   playwright.config.ts                              │
│   ENV · BROWSER · HEADLESS · INCOGNITO · WORKERS · GROUP           │
├──────────────┬──────────────────────────┬───────────────────────────┤
│   Allure     │    Playwright HTML       │      Jenkins              │
│   Report     │       Report             │   Parameterized CI        │
└──────────────┴──────────────────────────┴───────────────────────────┘
```

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🌍 **Dynamic Environments** | Switch between `local`, `staging`, and `prod` via env var |
| 🌐 **Multi-Browser** | Chrome, Firefox, Edge, WebKit — run one or all |
| 🕵️ **Incognito / Normal** | Toggle private browsing mode dynamically |
| 👁️ **Headed / Headless** | Controlled via `HEADLESS` env var |
| ⚡ **Serial / Parallel** | Worker count and mode toggled via `TEST_MODE` + `WORKERS` |
| 🔌 **Network Mocking** | Intercept & mock API responses with custom payloads |
| 🏭 **Page Object Factory** | Modular, reusable locator classes (POM pattern) |
| 📡 **API-Assisted Tests** | Login, signup & cart via REST API — no UI boilerplate |
| 🗂️ **Data-Driven** | JSON-based test data for users, orders, and products |
| 🏷️ **Test Grouping** | Tag-based groups: `@core`, `@api`, `@net`, `@data`, `@gen` |
| 🎬 **Failure Artifacts** | Auto screenshots, videos, and traces on failure |
| 📊 **Triple Reporting** | Allure + Playwright HTML + Console list reporter |
| 🔧 **Jenkins Parameterized** | Full CI pipeline with dynamic parameter injection |
| ♻️ **Smart Retries** | Configurable retries (2x on CI, 0 locally) |
| 🔑 **Token Extraction** | Dynamic cart token parsed from HTML for API flows |

---

## 📁 Project Structure

```
playwright-prestashop/
│
├── 📂 tests/                        # All test specifications (48 tests)
│   ├── addToCart.spec.ts            # Add-to-cart flows
│   ├── Courselarrows.spec.ts        # Carousel / slider tests
│   ├── data_order.spec.ts           # Data-driven order tests
│   ├── filter.spec.ts               # Product filter & sort tests
│   ├── forgotpassword.spec.ts       # Password recovery flow
│   ├── login.spec.ts                # Authentication tests
│   ├── mockcart.spec.ts             # Network-mocked cart tests
│   ├── order.spec.ts                # End-to-end order placement
│   ├── search.spec.ts               # Search functionality tests
│   └── signup.spec.ts               # User registration tests
│
├── 📂 API/                          # API helper layer
│   ├── apiLogin.ts                  # Programmatic login via REST
│   ├── signup.ts                    # Programmatic user registration
│   ├── addToCart.ts                 # REST-based cart operations
│   ├── product.ts                   # Product page token extraction
│   └── search.ts                    # Search API helpers
│
├── 📂 POM/                          # Page Object Factory Model
│   ├── address.ts                   # Address page locators & actions
│   └── filter.ts                    # Filter page locators & actions
│
├── 📂 NETWORK/                      # Network interception layer
│   └── Cart.ts                      # Cart route mocking (full payload)
│
├── 📂 DATA/                         # Test data (JSON)
│   ├── test-data.json               # User credentials & product data
│   └── order.json                   # Order-specific test data
│
├── 📂 allure-results/               # Raw Allure test results
├── 📂 allure-report/                # Generated Allure HTML report
├── 📂 playwright-report/            # Playwright built-in HTML report
├── 📂 test-results/                 # Failure artifacts (screenshots/video/trace)
│
├── playwright.config.ts             # Master configuration file
├── package.json
└── .github/workflows/playwright.yml # GitHub Actions workflow
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm / npx
- PrestaShop running locally at `http://localhost:8081/`

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/playwright-prestashop.git
cd playwright-prestashop

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

### Run All Tests (Default)

```bash
npx playwright test
```

### Run with Specific Browser

```bash
npx playwright test --project=chrome
npx playwright test --project=firefox
npx playwright test --project=edge
npx playwright test --project=webkit
```

---

## ⚙️ Dynamic Configuration

The entire framework is driven by **environment variables** — no code changes needed to switch modes.

| ENV Variable | Values | Default | Purpose |
|---|---|---|---|
| `ENV` | `local` \| `staging` \| `prod` | `local` | Target environment |
| `HEADLESS` | `true` \| `false` | `true` | Browser visibility |
| `INCOGNITO` | `true` \| `false` | `false` | Private browsing |
| `TEST_MODE` | `serial` \| `parallel` | `parallel` | Execution mode |
| `WORKERS` | `1`–`n` | CPU-based | Parallel worker count |
| `GROUP` | `core` \| `api` \| `net` \| `data` \| `gen` \| `all` | `all` | Test group filter |
| `BROWSER` | `chrome` \| `firefox` \| `edge` \| `webkit` \| `all` | `all` | Browser selection |

### PowerShell Examples

```powershell
# Headed Chrome, staging env
$env:HEADLESS="false"; $env:ENV="staging"; npx playwright test --project=chrome

# Incognito Firefox, serial mode
$env:INCOGNITO="true"; $env:TEST_MODE="serial"; npx playwright test --project=firefox

# Run only API group on Edge
$env:GROUP="api"; npx playwright test --project=edge

# Full parallel run, headless, local
npx playwright test
```

### Environment URL Mapping

```typescript
const ENV_URLS = {
    local:   'http://localhost:8081/',
    staging: 'https://staging.example.com',
    prod:    'https://www.example.com',
};
```

---

## 🌐 Multi-Browser Execution

The framework supports **5 browser configurations** with full-screen support:

```typescript
// Chrome — maximized, incognito-ready
{ name: 'chrome', browserName: 'chromium', channel: 'chrome', args: ['--start-maximized'] }

// Firefox — maximized via userPrefs
{ name: 'firefox', browserName: 'firefox', firefoxUserPrefs: { 'browser.startup.maximized': true } }

// Edge — maximized, InPrivate-ready
{ name: 'edge', browserName: 'chromium', channel: 'msedge', args: ['--start-maximized'] }

// WebKit / Safari — 1920×1080 explicit viewport
{ name: 'webkit', browserName: 'webkit', viewport: { width: 1920, height: 1080 } }
```

> **Full-Screen Fix**: `viewport: null` is set for Chromium/Firefox in headed mode so `--start-maximized` is not silently overridden.

---

## 🧪 Test Groups & Tagging

Tests are tagged with `@group` annotations for selective execution:

| Tag | Description | Example Test |
|---|---|---|
| `@gen` | General UI / feature tests | Filter, Carousel |
| `@net` | Network mocking tests | Cart mock, Intercept |
| `@api` | API-driven tests | Login, Signup via API |
| `@data` | Data-driven tests | JSON order tests |
| `@core` | Core smoke tests | Login, Search |

### Running by Group

```powershell
# Via env var (Jenkins/local)
$env:GROUP="net"; npx playwright test

# Via Playwright grep directly
npx playwright test --grep "@gen"
npx playwright test --grep "@net"
```

---

## 📡 API Layer

The `API/` folder provides **programmatic helpers** that bypass the UI for test setup, keeping tests fast and focused on the feature under test.

### Why API-First Setup?

- ⚡ 10x faster than UI-based login/signup flows
- 🎯 Tests focus on the feature, not the setup
- 🔐 Eliminates flakiness from UI login forms
- 🔄 Reusable across all test files

### Token Extraction

The framework dynamically extracts CSRF/cart tokens directly from HTML responses:

```typescript
// API/product.ts
export async function openProduct(apiContext: any) {
    const response = await apiContext.get('/1-1-hummingbird-printed-t-shirt.html');
    const html = await response.text();

    // Regex-based dynamic token extraction
    const tokenMatch = html.match(/name="token"\s+value="(.*?)"/);
    if (!tokenMatch) throw new Error("Cart token not found");

    return tokenMatch[1]; // Returns live session token
}
```

### Usage in Tests

```typescript
import { apiSignup } from '../API/signup';
import { apiLogin }  from '../API/apiLogin';

test('order flow', async ({ page }) => {
    const user = await apiSignup();           // Creates a fresh user via API
    await apiLogin(page, user.email, user.password); // Injects auth cookies
    // ✅ Test starts already authenticated — no UI login needed
});
```

---

## 🔌 Network Interception & Mocking

The `NETWORK/Cart.ts` module intercepts live HTTP traffic and substitutes controlled mock responses — enabling **pricing validation without backend dependency**.

### How It Works

```
Browser → POST /cart?add=1&action=update
              ↓
        Route Interceptor
              ↓
    isAddToCart? YES → return cartMockResponse (€119.00 total)
                 NO  → route.continue() (pass through)
```

### Mock Implementation

```typescript
// NETWORK/Cart.ts
export async function mockCart(context: BrowserContext): Promise<void> {
    await context.route('**/cart**', async (route: Route) => {
        const params = new URLSearchParams(route.request().postData() ?? '');
        
        const isAddToCart =
            route.request().method() === 'POST' &&
            params.get('add') === '1' &&
            params.get('action') === 'update';

        if (isAddToCart) {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(cartMockResponse), // Controlled payload
            });
        } else {
            await route.continue(); // Let other requests pass through
        }
    });
}
```

### What Gets Validated

```typescript
await expect(modal).toContainText('Mug The adventure begins');
await expect(modal).toContainText('€11.90');           // Unit price
await expect(modal).toContainText('Quantity: 10');
await expect(modal).toContainText('Subtotal: €119.00');
await expect(modal).toContainText('Total (tax incl.) €119.00');
await expect(modal).toContainText('There are 10 items in your cart.');
```

---

## 🗂️ Page Object Factory Model

Locators are centralized in `POM/` classes, promoting reusability and maintainability.

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
        this.accessoriesLink = page.locator('...');
        this.sortDropdown    = page.locator('...');
        // Parent → Child chaining for robust selectors
        this.prices         = page.locator('.product-miniature .price');
        this.productTitles  = page.locator('.product-miniature .product-title');
    }
}
```

### Usage in Tests

```typescript
test('@gen Filter functionality', async ({ page }) => {
    const filter = new FilterPage(page); // Factory instantiation

    await filter.accessoriesLink.click();
    await filter.sortDropdown.click();
    await filter.priceHighToLow.click();

    // Validate descending price order
    const prices = await filter.prices.allTextContents();
    const numeric = prices.map(p => parseFloat(p.replace('€', '')));
    expect(numeric).toEqual([...numeric].sort((a, b) => b - a));
});
```

---

## 📊 Data-Driven Testing

Test data is externalized to JSON files in `DATA/`, keeping test logic clean and data easily maintainable.

### `DATA/test-data.json`
```json
{
  "users": [
    { "email": "test@example.com", "password": "Test@123" }
  ],
  "products": [
    { "name": "Hummingbird T-Shirt", "url": "/1-1-hummingbird-printed-t-shirt.html" }
  ]
}
```

### `DATA/order.json`
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "address": "123 Test Street",
  "city": "Test City",
  "postcode": "12345"
}
```

### Usage

```typescript
import orderData from '../DATA/order.json';
import testData  from '../DATA/test-data.json';

test.each(testData.users)('Login as $email', async ({ page }, user) => {
    await apiLogin(page, user.email, user.password);
});
```

---

## 🎬 Failure Artifacts

When a test fails, the framework **automatically captures**:

| Artifact | Format | Trigger |
|---|---|---|
| 📸 Screenshot | `.png` | `only-on-failure` |
| 🎥 Video | `.webm` | `retain-on-failure` |
| 🔍 Trace | `.zip` (Playwright Trace Viewer) | `retain-on-failure` |
| 📝 Error Context | `.md` | Always |

### Artifact Location

```
test-results/
└── forgotpassword--gen-Forgot-Password-functionality-firefox/
    ├── test-failed-1.png     ← Screenshot at point of failure
    ├── video.webm            ← Full test recording
    ├── trace.zip             ← Open with: npx playwright show-trace trace.zip
    └── error-context.md      ← Error message + stack trace
```

### Configuration

```typescript
use: {
    trace:      'retain-on-failure',   // Playwright DevTools trace
    screenshot: 'only-on-failure',     // PNG screenshot
    video:      'retain-on-failure',   // WebM video recording
    actionTimeout:     15_000,
    navigationTimeout: 30_000,
}
```

---

## 📈 Reporting Suite

The framework generates **three reports simultaneously** after every run.

### 1. 📊 Allure Report

Rich, interactive report with test history, trends, and categories.

```bash
# Generate and open Allure report
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

**Allure Categories:**
- 🔴 **Product Defects** — `AssertionError` failures (actual test bugs)
- 🟡 **Test Defects** — `TimeoutError` failures (infrastructure/timing issues)
- ⚪ **Ignored Tests** — Skipped tests

**Allure Environment Info** (auto-injected):
```
ENV       = local | staging | prod
BASE_URL  = http://localhost:8081/
MODE      = parallel | serial
HEADLESS  = true | false
INCOGNITO = true | false
```

### 2. 🎭 Playwright HTML Report

```bash
npx playwright show-report
```

### 3. 📋 Console List Reporter

Live output in terminal during test execution.

---

## 🔧 Jenkins CI/CD Integration

Fully parameterized Jenkins pipeline with **dynamic environment variable injection**.

### Jenkins Parameters

| Parameter | Type | Options | Default |
|---|---|---|---|
| `ENV` | Choice | `local`, `staging`, `prod` | `local` |
| `BROWSER` | Choice | `chrome`, `firefox`, `edge`, `webkit`, `all` | `chrome` |
| `GROUP` | Choice | `all`, `core`, `api`, `net`, `data`, `gen` | `all` |
| `HEADLESS` | Boolean | `true`, `false` | `true` |
| `INCOGNITO` | Boolean | `true`, `false` | `false` |
| `WORKERS` | String | `1`–`n` | `4` |

### Jenkins Shell Script

```batch
cd "C:\Users\raxit\IdeaProjects\playwright Prestashop"

set HEADLESS=%HEADLESS%
set INCOGNITO=%INCOGNITO%
set ENV=%ENV%

:: Handle GROUP — translate to --grep flag
if "%GROUP%"=="all" (
    set TAG_CMD=
) else (
    set TAG_CMD=--grep "@%GROUP%"
)

:: Handle Browser selection
if "%BROWSER%"=="all" (
    set PROJECTS=
) else (
    set PROJECTS=--project=%BROWSER%
)

:: Execute tests
npx playwright test %PROJECTS% --workers=%WORKERS% %TAG_CMD%

if %ERRORLEVEL% NEQ 0 exit /b %ERRORLEVEL%
```

### Jenkins Post-Build: Allure Report

```groovy
post {
    always {
        allure([
            includeProperties: true,
            jdk: '',
            reportBuildPolicy: 'ALWAYS',
            results: [[path: 'allure-results']]
        ])
        publishHTML([
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright HTML Report'
        ])
    }
}
```

### Example Jenkins Executions

```bash
# Smoke test on Chrome, headless, staging
ENV=staging BROWSER=chrome GROUP=core HEADLESS=true WORKERS=4

# Full regression, all browsers, parallel
ENV=prod BROWSER=all GROUP=all HEADLESS=true WORKERS=8

# Network tests debug run, headed Firefox
ENV=local BROWSER=firefox GROUP=net HEADLESS=false WORKERS=1

# API tests, incognito Chrome
ENV=local BROWSER=chrome GROUP=api INCOGNITO=true WORKERS=2
```

---

## ♻️ Retry Mechanism

The framework implements intelligent retry logic:

```typescript
retries: process.env.CI ? 2 : 0
```

| Context | Retries | Behaviour |
|---|---|---|
| **CI (Jenkins/GitHub Actions)** | 2 | Flaky network/timing issues auto-recover |
| **Local Development** | 0 | Fail fast — see real errors immediately |

Failed test folders include retry suffixes:
```
test-results/
├── forgotpassword-firefox/              ← First attempt
├── forgotpassword-firefox-retry1/       ← Second attempt
└── forgotpassword-firefox-retry2/       ← Third attempt (final)
```

---

## 📜 Test Inventory

**Total: 48 Test Cases** across 10 test files

| File | Tag | Test Cases | Description |
|---|---|---|---|
| `login.spec.ts` | `@core` | 5 | Valid login, invalid credentials, session persistence |
| `signup.spec.ts` | `@core` | 5 | New user registration, validation, duplicate email |
| `search.spec.ts` | `@core` | 4 | Keyword search, no results, autocomplete |
| `addToCart.spec.ts` | `@core` | 6 | Add products, quantity update, remove from cart |
| `order.spec.ts` | `@core` | 6 | Guest checkout, registered checkout, payment |
| `filter.spec.ts` | `@gen` | 5 | Sort by price, name A-Z, category filter |
| `forgotpassword.spec.ts` | `@gen` | 3 | Password reset flow, invalid email handling |
| `Courselarrows.spec.ts` | `@gen` | 4 | Carousel navigation, slide validation |
| `mockcart.spec.ts` | `@net` | 5 | Network mock pricing, quantity × price validation |
| `data_order.spec.ts` | `@data` | 5 | JSON-driven order placement with multiple datasets |

---

## 🛠️ NPM Scripts

```json
{
  "scripts": {
    "test":            "npx playwright test",
    "test:chrome":     "npx playwright test --project=chrome",
    "test:firefox":    "npx playwright test --project=firefox",
    "test:headed":     "HEADLESS=false npx playwright test",
    "test:serial":     "TEST_MODE=serial npx playwright test",
    "allure:generate": "allure generate allure-results --clean -o allure-report",
    "allure:open":     "allure open allure-report",
    "report":          "npx playwright show-report"
  }
}
```

---

## 📦 Dependencies

```json
{
  "dependencies": {
    "@playwright/test":  "^1.x",
    "allure-playwright": "^3.x",
    "allure-js-commons": "^3.x",
    "@zerostep/playwright": "^x.x",
    "md5": "^x.x"
  }
}
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-test-suite`
3. Follow the existing POM + API layer patterns
4. Tag your tests with the appropriate `@group`
5. Ensure all tests pass locally before opening a PR
6. Open a Pull Request with a clear description

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:24243e,50:302b63,100:0f0c29&height=120&section=footer" width="100%"/>

**Built with ❤️ using Playwright + TypeScript**

*Framework designed for reliability, speed, and maintainability at scale.*

</div>

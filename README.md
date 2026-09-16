# SauceDemo QA Automation Challenge

## Tech Stack

* **Playwright** – End-to-end testing framework used to automate the application. It was chosen because it provides reliable browser automation, built-in auto-waiting, powerful assertions, and cross-browser support.
* **TypeScript** – Used as the programming language because its type safety helps improve code readability and maintainability.
* **Node.js / npm** – Used to manage project dependencies and execute the test suite.
* **Page Object Model (POM)** – Used to separate page-specific elements and actions from test scenarios, improving maintainability and reusability.
* **GitHub Actions** – Used to automatically execute the test suite in a CI environment.

## Setup Instructions

### Prerequisites

* Node.js installed
* npm installed
* Git installed

### Installation

Clone the repository and install the project dependencies:

```bash
git clone https://github.com/CarlaGomez2611/saucedemo-qa-challenge.git
cd saucedemo-qa-challenge
npm install
```

Install the Playwright browsers:

```bash
npx playwright install
```

## How to Execute the Tests

Run all tests with:

```bash
npx playwright test
```

Run tests on a specific browser:

```bash
npx playwright test --project=chromium
```

```bash
npx playwright test --project=firefox
```

```bash
npx playwright test --project=webkit
```

Run the tests in headed mode:

```bash
npx playwright test --headed
```

Run a specific test file:

```bash
npx playwright test tests/login/login.spec.ts
```

Open the HTML test report:

```bash
npx playwright show-report
```

## Design Decisions

* **Page Object Model (POM):** Page-specific elements and actions are separated from test scenarios to improve maintainability and reusability.
* **Reusable locators and methods:** Common actions such as login and checkout are encapsulated in page objects instead of being duplicated across tests.
* **Assertions:** Playwright assertions are used to validate expected application behavior and test outcomes.
* **Test isolation:** Each test is designed to run independently to reduce dependencies between test cases.
* **Stable locators:** Data attributes and meaningful selectors are preferred to make tests less sensitive to UI changes.
* **Separation of positive and negative scenarios:** Successful and failed checkout flows are covered in separate test cases to keep scenarios clear and easy to maintain.

## Known Limitations

* The tests depend on the availability and stability of the SauceDemo application.
* The test scenarios use the test users and data provided by the application.
* The current scope focuses on functional end-to-end testing.
* Performance, security, accessibility, and API testing are outside the scope of this challenge.
* Changes to the application's UI, locators, or test data may require updates to the automated tests.

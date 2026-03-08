# auto-repo-snap

Automatically capture, archive, and share visual snapshots of any public GitHub repository — in seconds.

## Getting Started Locally

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/cstolps8/auto-repo-snap.git
cd auto-repo-snap
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit source files.

### Running a Production Build

```bash
npm run build   # compile and optimize
npm run start   # serve the compiled output
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## End-to-End Testing with Playwright

This project uses [Playwright](https://playwright.dev/) to automate and verify interactions with the application — including clicking buttons, filling forms, and checking navigation.

### Why Playwright?

Playwright lets you target HTML elements the same way a user would interact with them:

| Selector strategy | Example | Best for |
|---|---|---|
| By accessible role | `page.getByRole("button", { name: /generate snapshot/i })` | Buttons, links, inputs |
| By `data-testid` attribute | `page.getByTestId("hero-cta")` | Custom components |
| By label text | `page.getByRole("textbox", { name: /repository url/i })` | Form inputs |

### Writing a Button-Click Test

Create a new file under `e2e/` (e.g. `e2e/my-feature.spec.ts`):

```ts
import { test, expect } from "@playwright/test";

test("clicking Generate Snapshot shows a success message", async ({ page }) => {
  await page.goto("/snap");

  // Fill the input field
  await page.getByRole("textbox", { name: /repository url/i })
    .fill("https://github.com/vercel/next.js");

  // Click the button
  await page.getByRole("button", { name: /generate snapshot/i }).click();

  // Assert the expected outcome
  await expect(page.getByTestId("success-message")).toBeVisible();
});
```

Add a `data-testid` attribute to any HTML element you want to target reliably:

```tsx
<button data-testid="my-button" onClick={handleClick}>
  Do Something
</button>
```

Then reference it in your test:

```ts
await page.getByTestId("my-button").click();
```

### Running the Tests

```bash
# Run all E2E tests (headless)
npm run test:e2e

# Open the interactive Playwright UI
npm run test:e2e:ui
```

The Playwright config (`playwright.config.ts`) automatically builds and starts the app before running tests — no manual server startup is required.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Next.js development server with hot-reloading |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint across the codebase |
| `npm run test:e2e` | Run Playwright end-to-end tests (headless) |
| `npm run test:e2e:ui` | Open the Playwright interactive UI runner |

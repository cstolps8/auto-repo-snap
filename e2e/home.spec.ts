import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has the correct page title", async ({ page }) => {
    await expect(page).toHaveTitle(/auto-repo-snap/i);
  });

  test("displays the brand name in the header", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /auto-repo-snap/i }).first()
    ).toBeVisible();
  });

  test("displays the main headline", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /snapshot any github repo/i })
    ).toBeVisible();
  });

  test("shows the hero call-to-action button", async ({ page }) => {
    await expect(
      page.getByRole("link", { name: /get started/i })
    ).toBeVisible();
  });

  test("hero CTA navigates to the Snap page", async ({ page }) => {
    await page.getByTestId("hero-cta").click();
    await expect(page).toHaveURL("/snap");
  });

  test("navigation contains About and Try It links", async ({ page }) => {
    const nav = page.getByRole("navigation");
    await expect(nav.getByRole("link", { name: "About" })).toBeVisible();
    await expect(nav.getByRole("link", { name: "Try It" })).toBeVisible();
  });

  test("displays three feature cards", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /instant snapshots/i })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /auto-updated/i })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /shareable links/i })
    ).toBeVisible();
  });
});

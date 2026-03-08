import { test, expect } from "@playwright/test";

test.describe("About page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/about");
  });

  test("displays the About heading", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /about auto-repo-snap/i })
    ).toBeVisible();
  });

  test("shows the brand name as a link back to home", async ({ page }) => {
    const homeLink = page
      .getByRole("banner")
      .getByRole("link", { name: /auto-repo-snap/i });
    await expect(homeLink).toBeVisible();
    await homeLink.click();
    await expect(page).toHaveURL("/");
  });

  test("navigation highlights the About link as active", async ({ page }) => {
    const aboutLink = page
      .getByRole("navigation")
      .getByRole("link", { name: "About" });
    await expect(aboutLink).toHaveClass(/font-medium/);
  });

  test("displays descriptive content about the tool", async ({ page }) => {
    await expect(page.getByText(/open-source tool/i)).toBeVisible();
  });
});

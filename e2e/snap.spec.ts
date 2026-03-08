import { test, expect } from "@playwright/test";

test.describe("Snap page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/snap");
  });

  test("displays the Snap a Repository heading", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: /snap a repository/i })
    ).toBeVisible();
  });

  test("shows the repository URL input field", async ({ page }) => {
    await expect(page.getByRole("textbox", { name: /repository url/i })).toBeVisible();
  });

  test("shows the Generate Snapshot button", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /generate snapshot/i })
    ).toBeVisible();
  });

  test("shows a validation error when submitting an empty form", async ({
    page,
  }) => {
    await page.getByRole("button", { name: /generate snapshot/i }).click();
    await expect(page.getByTestId("form-error")).toContainText(
      /please enter a github repository url/i
    );
  });

  test("shows a validation error for a non-GitHub URL", async ({ page }) => {
    await page.getByRole("textbox", { name: /repository url/i }).fill("https://gitlab.com/owner/repo");
    await page.getByRole("button", { name: /generate snapshot/i }).click();
    await expect(page.getByTestId("form-error")).toContainText(
      /url must start with https:\/\/github\.com\//i
    );
  });

  test("shows a success message after submitting a valid GitHub URL", async ({
    page,
  }) => {
    const validUrl = "https://github.com/vercel/next.js";
    await page
      .getByRole("textbox", { name: /repository url/i })
      .fill(validUrl);
    await page.getByRole("button", { name: /generate snapshot/i }).click();

    const successBox = page.getByTestId("success-message");
    await expect(successBox).toBeVisible();
    await expect(successBox).toContainText(/snapshot queued/i);
    await expect(successBox).toContainText(validUrl);
  });

  test("can snap another repository after a successful submission", async ({
    page,
  }) => {
    await page
      .getByRole("textbox", { name: /repository url/i })
      .fill("https://github.com/vercel/next.js");
    await page.getByRole("button", { name: /generate snapshot/i }).click();
    await expect(page.getByTestId("success-message")).toBeVisible();

    await page.getByRole("button", { name: /snap another/i }).click();
    await expect(
      page.getByRole("button", { name: /generate snapshot/i })
    ).toBeVisible();
    await expect(page.getByRole("textbox", { name: /repository url/i })).toHaveValue("");
  });
});

test.describe("Snap page — navigation", () => {
  test("navigating from home via 'Try It' reaches the Snap page", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByRole("navigation").getByRole("link", { name: "Try It" }).click();
    await expect(page).toHaveURL("/snap");
    await expect(
      page.getByRole("heading", { name: /snap a repository/i })
    ).toBeVisible();
  });
});

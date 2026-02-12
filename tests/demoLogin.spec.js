// @ts-check
import { test } from '@playwright/test';

test('Login Demo opensource-demo', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await page.locator('[name="username"]').fill('Admin');
  await page.locator('[name="password"]').fill('admin123');
  await page.locator('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').first().click();
  await page.locator('[class="oxd-brand-banner"]').isVisible();
  await page.locator('[class="oxd-userdropdown-tab"]').click();
  await page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[3]/ul/li/ul/li[4]/a').click();
});

test('Login Demo nopcommerce', async ({ page }) => {
  await page.goto('https://admin-demo.nopcommerce.com/');
  await page.locator('[class="button-1 login-button"]').first().click();
  await page.locator('[class="content-header"]').isVisible();
  

});
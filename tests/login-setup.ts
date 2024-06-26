import { test as setup, expect } from '../fixtures/pom-fixture';
import { STORAGE_STATE } from '../playwright.config';

setup('Test Login Functionality', async ({ page,loginPage }) => {
  await page.goto('')
  await loginPage.peformSignIn(process.env.USERNAME!,process.env.PASSWORD!)
  await page.context().storageState({path:STORAGE_STATE})
  await page.close()
});
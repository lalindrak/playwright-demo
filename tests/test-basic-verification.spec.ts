import { test, expect } from '../fixtures/pom-fixture';

test.beforeEach(async ({ page}) => {
    await page.goto('')
  });

test('Test basic verification of the user', async ({homePage }) => {
  await homePage.clickMyAccountsLink(" Edit your account information")
  let loggedInEmail = await homePage.getPersonalInformation('E-Mail')
  expect(loggedInEmail).toEqual(process.env.username!)
});

let categories =['Components','Cameras','Software']
for(let category of categories){
test(`Test verify top categories are loaded properly${category}`,async({homePage})=>{
    await homePage.clickTopCategoriesButton()
    expect(await homePage.linksTopCategories(category).isVisible()).toBeTruthy()
})}

test.afterEach(async ({ page}) => {
    await page.close()
  });
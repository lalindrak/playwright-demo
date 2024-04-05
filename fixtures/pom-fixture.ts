import{test as baseTest}from '@playwright/test'
import { LoignPage } from '../pages/loginpage'
import { HomePage } from '../pages/homepage'


type pages={
    loginPage:LoignPage
    homePage:HomePage
}

const testPages = baseTest.extend<pages>({
    loginPage:async({page},use)=>{
        await use(new LoignPage(page))
    },
    homePage:async({page},use)=>{
        await use(new HomePage(page))
    }
})

export const test = testPages
export const expect= testPages.expect


import { Page } from "@playwright/test";
import { BasePage } from "./basepage";

export class LoignPage extends BasePage{
    readonly page:Page

    constructor(page:Page){
        super(page)
        this.page=page
    }

    private get textUsername(){
        return this.page.getByPlaceholder('E-Mail Address')
    }
    private get textPassword(){
        return this.page.getByPlaceholder('Password')
    }
    private get buttonSignIn(){
        return this.page.getByRole('button', { name: 'Login' })
    }

    async peformSignIn(username:string,password:string){
        await this.textUsername.fill(username)
        await this.textPassword.fill(password)
        await this.buttonSignIn.click()
    }

}
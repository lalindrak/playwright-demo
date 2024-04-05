import { Page } from "@playwright/test";
import { BasePage } from "./basepage";

export class HomePage extends BasePage{
    readonly page:Page
    constructor(page:Page){
        super(page)
        this.page=page
    }

    private get linksMyAccount() {
        return (myAccountLinks: string) => {
            return this.page.getByRole('link', { name: myAccountLinks });
        };
    }
    private get textmyAccountInfo(){
        return(personalDetails:string)=>{
            return this.page.getByPlaceholder(personalDetails);
        };
    }
    private get buttonShopByCategory(){
        return this.page.getByRole('button', { name: 'Shop by Category' })
    }
    get linksTopCategories(){
        return(topCategories:string)=>{
            return this.page.getByRole('link', { name: topCategories, exact:true })
        }
    }
    async clickMyAccountsLink(myAccountLinks:string){
        await this.linksMyAccount(myAccountLinks).click()
    }

    async getPersonalInformation(personalDetails:string){
        return await this.textmyAccountInfo(personalDetails).inputValue()
    }
    async clickTopCategoriesButton(){
        await this.buttonShopByCategory.click()
    }
}
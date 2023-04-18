export class Tel {
    private id: number
    private tel: number
    private company: string
    constructor(id: number, tel: number, company: string){
        this.setId(id)
        this.setTel(tel)
        this.setCompany(company)
    }
    setId(id:number):void{
        if(id>=0){
            this.id = id
        } else {
            this.id = 0
        }
    }
    setTel(tel:number):void{
        this.tel = tel
    }
    setCompany(company:string):void{
        if(company.length>0){
            this.company = company
        } else {
            this.company = 'Unknown'
        }
    }
    getId():number{
        return this.id
    }
    getTel():number{
        return this.tel
    }
    getCompany():string{
        return this.company
    }
    toString():string{
        return `{
        Id: ${this.id}
        Number: ${this.tel}
        Company: ${this.company}
        }`
    }
}
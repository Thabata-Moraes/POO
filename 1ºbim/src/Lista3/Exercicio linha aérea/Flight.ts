export class Flight {
    private id:number
    private origin:string
    private destination:string
    constructor ( id:number ,  origin:string,  destination:string){
        this.setId(id)
        this.setOrigin(origin)
        this.setDestination(destination)
    }
    setId(id:number){
        if(id>=0){
            this.id = id
        }
    }
    setOrigin(origin:string):void{
        this.origin = origin
    }
    setDestination(destination:string):void{
        this.destination = destination
    }
    getId():number{
        return this.id
    }
    getOrigin():string{
        return this.origin
    }
    getDestination():string{
        return this.destination 
    }
    toString():string{
        return `id: ${this.id},  Origin: ${this.origin}, Destination: ${this.destination}`
    }
}
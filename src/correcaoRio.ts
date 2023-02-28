class correcaoRio{
    public name: string;
    public level: number;
    public polluted: boolean;

    constructor(name: string, level: number, polluted: boolean){
        this.name = name
        this.level = level
        this.polluted = polluted
    }
    rain(n:number):void{
        this.level += n 
    }
     sunny(n:number):void{
       this.level -= n 
   }
   clean():void{
       this.polluted = false;
   }
   dirty():void{
       this.polluted = true;
   }
   display():string{ 
       return ( 
            `
           River name: ${this.name}                                   
           Water level: ${this.level}         
           Polluted?: ${this.polluted? 'Yes': 'No'}
           `  
       ) 
   }
}

let correcaoRio1 = new correcaoRio('Bonitinho', 50, false)
console.log(correcaoRio1.display())

let correcaoRio2 = new correcaoRio('Ajeitadinho', 2500, true)
console.log(correcaoRio2.display())


correcaoRio1.rain(20)
correcaoRio2.sunny(50)
correcaoRio1.dirty()
correcaoRio2.clean()
console.log(correcaoRio1.display())
console.log(correcaoRio2.display())

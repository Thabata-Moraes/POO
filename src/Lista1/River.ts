class River{
         name: string;
         level: number;
         polluted: boolean;

         rain(n:number){
         this.level = this.level + n 
         }
          sunny(n:number){
            this.level = this.level - n 
        }
        clean(){
            this.polluted = false;
        }
        dirty(){
            this.polluted = true;
        }
        display(){ 
            return ( 
                console.log( `
                River name: ${this.name}                                   
                Water level: ${this.level}         
                Polluted?: ${this.polluted}`
                )  
            ) 
        }
}

let river1 = new River()
river1.name = 'Bonitinho'
river1.level = 50
river1.polluted = false

console.log(river1.polluted)

let river2 = new River()
river2.name = 'Ajeitadinho'
river2.level = 2500
river2.polluted = true

river1.display()
river2.display()
river1.rain(20)
river2.sunny(50)
river1.dirty()
river2.clean()
river1.display()
river2.display()

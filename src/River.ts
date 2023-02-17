class River{
         name: string
         level: number 
         polluted: boolean

         rain(n:number){
         this.level = this.level + n 
         }
         sunny(n:number){
         this.level = this.level - n 
         }
         clean(){
         this.polluted = false
         }
         dirty(){
         this.polluted = true
         }
         display(){ 
         return ( 
             console.log( `
              River name: ${this.name}                                   
              Water level: ${this.level}         
              Polluted?: ${this.pulluted}`
              ) 
         ) 
      }
}

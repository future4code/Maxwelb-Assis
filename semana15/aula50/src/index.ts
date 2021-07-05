// exercicio 1

export interface Client {
    name: string;
  
    registrationNumber: number;
  
    consumedEnergy: number;
  
    calculateBill(): number;
  }


  const client: Client = {
    name: "max",
    registrationNumber: 300,
    consumedEnergy: 150,
  
    calculateBill: () => {
      return 2;
    }
  }
  

  // exercicio 2

  class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

  const newPlace = new Place("dsdsd")

  // a ) informa que nao pode criar uma instancia de uma classe abstrata
  // b ) tirar o termo abstract da classe


  // exercicio 3

  export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      // Refere-se ao número de moradores da casa
  
      cep: string
    ) {
      super(cep);
    }

    newResidents = new Residence(4, "28460000")
   
    get getResidentsQuantity( ):number {
     return this.residentsQuantity   
    }


  }

  export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
    


  public getfloorsQuantity(): number {
      return this.floorsQuantity
  }
  
  }
  const comercio = new Commerce(10, "2316151")

  

  export class Industry extends Place {
    constructor(
      protected machinesQuantity: number, 
      // Refere-se à quantidade de máquinas do local 
      
      cep: string
          ) {
          super(cep);
    }

    public getMachinesQuantity(): number {
        return this.machinesQuantity
    }

  }

  const industria = new Industry(50, "959292")

// EXERCICIO 4

  export class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
      ) {
        super(residentsQuantity, cep);
      }

      public getCpf(): string {
        return this.cpf;
      }
    
      public calculateBill(): number {
        return this.consumedEnergy * 0.75;
      }
    }

    // exercicio 5

    export class CommercialClient extends Commerce implements Client {
        constructor(
            public name: string,
            public registrationNumber: number,
            public consumedEnergy: number,
            private cnpj: string,
            public floorsQuantity: number,
            cep: string
        )
        {
            super(floorsQuantity, cep);
          }

          public getCnpj(): string {
            return this.cnpj;
          }
        
          public calculateBill(): number {
            return this.consumedEnergy * 0.53;
          }
        }

    // exercicio 6

    export class IndustrialClient extends Industry implements Client {
        constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        machinesQuantity: number,
        cep: string
        )
        {super(machinesQuantity, cep)}


        public calculateBill(): number {
            return this.consumedEnergy * 0.53;
          }
        
          public getCnpj(): string {
            return this.cnpj;
        }

    }

    // exercicio 7

    
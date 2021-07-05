import * as moment from 'moment'
import * as fs from "fs"


class conta = {
    nome: string,
    nascimento: string,
    cpf: string,
    balance: number,
    extrato: []

    constructor(newNome: string, newNascimento: string, newCpf: string){
        this.nome = newNome
        this.nascimento = newNascimento
        this.cpf = newCpf
    }
} 


class Bank {
    private accounts: UserAccount[];
    private fileManager: JSONFileManager;
  
    constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
      this.accounts = accounts;
      this.fileManager = fileManager
    }
  
    public createAccount(userAccount: UserAccount): void {

    }
  
    public getAllAccounts(): UserAccount[] {
    
    }
  
    public getAccountByCpfAndName(cpf: string, name: string): 
          UserAccount | undefined {
          
       }
  }

  class Transaction {
    private data: string;
    private valor: number;
    private descricao: string;
    
    constructor(data: string, valor: number, descricao: string) {
      this.data = date;
      this.valor = value;
      this.descricao = description
    }
  }


  class criarConta {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }
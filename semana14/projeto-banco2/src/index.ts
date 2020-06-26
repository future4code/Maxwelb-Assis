import * as fs from 'fs'

const createAccount = (clientName: string, clientCpf: number, clientBirthday: string): void => {
    const newData: string = "usuarios.json";
    const dataBuffer: Buffer | undefined[] = fs.readFileSync(newData) || [];
    const clientData: string = dataBuffer.toString();
    const sendData: client[] = JSON.parse(clientData);
    const updatedClients: string = JSON.stringify(sendData);
    fs.writeFileSync(newData, updatedClients);
    type client = {
        name: string,
        cpf: number,
        birthday: string,
        balance: number,
        bankStatement: [{
            "amount": [],
            "date": [],
            "description": []
        }]
    };
    const newClient: client = {
        name: clientName,
        cpf: clientCpf,
        birthday:clientBirthday,
        balance: 0,
        bankStatement: [{
            "amount": [],
            "date": [],
            "description": []
        }]
    };
    sendData.push(newClient);
    console.log("passou aqui")
}; 
import axios from 'axios'
/*
//EXERCICIO 1

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

async function pegarInscritos(): Promise<any[]> {
    const usuarios = await axios.get(`${baseUrl}/subscribers/all`);
    console.log (usuarios.data)
  };

  // o endpoint  /subscribers/all
  //com o tipo any

  pegarInscritos()

//EXERCICIO 2

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

const pegarInscritos= async (): Promise<any[]> => {
    const usuarios = await axios.get(`${baseUrl}/subscribers/all`);
    console.log (usuarios.data)
  };

  pegarInscritos()
  */

  // EXERCICIO 3

  type assinantes ={
      id: string,
      name: string,
      email: string
  }


  const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

  const pegarInscritos= async (): Promise<assinantes[]> => {
    const usuarios = await axios.get(`${baseUrl}/subscribers/all`);
       return usuarios.data.map((usuario: any) => {
         id: usuario.id;
         name: usuario.name;
         email: usuario.email;       
        console.log(usuario.name)
        }

       )
       
  };
  pegarInscritos()
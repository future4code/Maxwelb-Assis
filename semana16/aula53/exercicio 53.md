### EXERCICIO 1

a) mostra todos os dados que o SQL envia, incluido os dados de conexao

b) 

````
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}
````

c) 
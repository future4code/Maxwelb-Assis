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

c) informou que nao pode atualizar um coluna filha



### EXERCICIO 2

a) a tabela moviecast faz referencia as tabelas actor e movie, pois ambas possuem elmentos em comum com a tabela moviecast

b)

````
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"001",
    "002"
)
````



### Exercicio 3

a) indica que deve ser procurado correspondencia nas duas tabelas citadas

b) 




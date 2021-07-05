### Exercicio 1

a) o VARCHAR indica o numero maximo de strings, DATE representa uma dara 

b) a apareceu o erro 2 rows retorned com a tabela de actor criada



### Exercicio 2

a)

  ```VALUES(
  "002", 
  "Glória Pires",
  1200.000,
  "1963-08-23", 
  "female"
);
  ```

b) entrada 002 duplicada para a key primaria

c)

````
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
````



d)

```` INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Bananinha",
  400000,
  "1949-04-18", 
  "male"
);
````



e)

````INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "2010-03-20", 
  "female"
);
````



f)

```` INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Bleus da Silva",
  819333.33,
  "2015-03-20", 
  "male"
);
````



### Exercicico 3

a)

```` SELECT id, name, salary from Actor WHERE gender = "female"
SELECT id, name, salary from Actor WHERE gender = "female"
````

b)

````
SELECT salary from Actor WHERE name = "tony ramos"
````

c)

retornou null para todos os campos



d)

````
SELECT id, name, salary from Actor WHERE salary > 500000
````

e)

```` SELECT id from Actor WHERE id = "002"
SELECT id, name from Actor WHERE id = "002"
````



### Exercicio 4

b)

````WHERE name NOT LIKE "A%" AND salary > 35000000
WHERE name NOT LIKE "A%" AND salary > 35000000
````

c)

````
SELECT * FROM Actor
WHERE name LIKE "%G%" AND "%g%" 
````

d)

````
WHERE (name LIKE "%G%" AND "%g%" OR "G" AND "g") AND salary between 35000000 AND 90000000
````




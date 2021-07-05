### Exercicio 1

a) apaga a coluna salario

b) da erro pois a coluna sex nao existe

c) muda o numero de strings do genero

d) 

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```



### Exercicio 2

a) 

````
UPDATE Actor
SET name = "Bananinha"
WHERE id = "003"
````

b) 

````
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes"

UPDATE Actor
SET name = "JUliana Paes"
WHERE name = "JULIANA PÃES"
````

d)

diz que alteração nao afetou nenhuma coluna



### Exercicio 3

a)

````
DELETE FROM Actor WHERE name = "Fernanda Montenegro"
````

b)

````
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000
````



### Exercicio 4

a)

````
SELECT max(salary) FROM Actor
````

b)

````
SELECT min(salary) FROM Actor where gender = "female"
````

c)

````
SELECT COUNT(*) FROM Actor WHERE gender = "female"
````

d)

````
SELECT SUM(salary) FROM Actor 
````



# Exercicio 5

b) 

````
SELECT id, name FROM Actor
ORDER BY name DESC;
````

c)

````
SELECT (*)FROM Actor
ORDER BY salary DESC;
````

d)

````
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
````

e)

````
SELECT AVG(salary), gender FROM Actor
group by gender
````



### Exercicio 6


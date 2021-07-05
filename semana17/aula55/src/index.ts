import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { v4 } from "uuid"
import knex from 'knex'


dotenv.config();


const userTableName = "User";

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE_NAME,
  },
});

CREATE TABLE User (
  id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};


const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});



const id = v4();
console.log("Generated Id: ", id);

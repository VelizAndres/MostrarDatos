import mysql from "mysql"
import { variables } from "@/Storage/ip";

const connection = mysql.createConnection({
    host: variables[1].host,       
    user:    variables[1].user, 
    password: variables[1].password,
    database: variables[1].database,
    port: variables[1].port,
  });

  export const dataBase = connection;
    
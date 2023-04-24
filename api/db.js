import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "blog",
  port: 3306
});


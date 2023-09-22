import mysql from "mysql";

export const db=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "valmiki123",
    database: "blogger"
})
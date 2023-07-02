import mysql from "mysql"

const connection = mysql.createConnection({
    host: 'ls-5174138e052e0de796486bee6bb8551e7d49555c.cevxphbb34gu.us-east-1.rds.amazonaws.com',       // Cambia esto si tu base de datos no está en el mismo servidor
    user: 'dbmasteruser',      // Cambia 'tu_usuario' por tu nombre de usuario de MySQL
    password: 'BCUvBl63w)fY_~b`od!n:q<]rs}!yHrP',  // Cambia 'tu_contraseña' por tu contraseña de MySQL
    database: 'final',  // Cambia 'tu_basededatos' por el nombre de tu base de datos
    port: "3306"
  });

  export const dataBase = connection;
    
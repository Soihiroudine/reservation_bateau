const mysql = require("mysql2");

// Permet de recuperer les informations du fichier .env
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    port: process.env.portMYSQL,
    database: process.env.database
});

// Vérifier si la connexion est réussie

try {
  connection.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données : ' + err.stack);
      return;
    } 
    console.log('Connecté à la base de données');
  });
} catch (error) {
  
}


module.exports = connection;
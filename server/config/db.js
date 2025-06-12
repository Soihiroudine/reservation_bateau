// 
const mysql = require("mysql2");

// Permet de recuperer les informations du fichier .env
require("dotenv").config();


/**
  * Les valeurs de host, user, password, port et database sont exporter depuis le
  * fichier .env
*/
const connection = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    port: process.env.portMYSQL,
    database: process.env.database
});

// Vérifier si la connexion est réussie

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données : ' + err.stack);
        return;
    } 
    console.log('Connecté à la base de données');
});


module.exports = connection;
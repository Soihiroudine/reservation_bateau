// on appelle le module mysql2 pour se connecter à la base de données
const mysql = require("mysql2");

// Permet de recuperer les informations du fichier .env
require("dotenv").config();

// Créer une connexion à la base de données
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

// Exporter la connexion pour l'utiliser dans d'autres fichiers
module.exports = connection;
// On importe le module http
const http = require("http");
require('dotenv').config()

// On importe le fichier app.js
const app = require("./app.js");
 
// On créer un port
const PORT = process.env.PORT_SERVEUR;

// On modifie le port de l'application avec la valeur du PORT
app.set("port", PORT);

// Déclaration du serveur en utilisant http
const server = http.createServer(app);

// Recuperer l'heure
const date = new Date();
const dateActuelle = date.toLocaleDateString();

// On ouvre le serveur
server.listen(PORT, () =>{
    // Afficher l'heure
    console.log(`Serveur lancer ${dateActuelle} à ${date.toLocaleTimeString()}`); 
    console.log(`Le serveur est lancé au port : ${PORT}`);
});
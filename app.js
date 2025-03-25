// On import le framework express
const express = require("express");
const session = require("express-session");
const cors = require('cors'); 

// On créer l'application expressJs avec : app
const app = express();


// on importe le fichier qui permet le changement dans notre base de donné
// const executionDB = require("./server/config/executeDB");
// executionDB("requetes.sql");

// On appele les routes
const routeAcceuil = require("./server/routes/routeAccueil");
const routeReservation = require("./server/routes/routeReservation");
const routeUtilisateur = require("./server/routes/routeUtilisateur");

// urlencoded pour les requetes POST
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// app.use(express.json());

// On créer une session secret pour notre application 
const sessionCle = process.env.SESSION_SECRET;

// On utilise la session pour notre application
// Elle va durée 30 minutes
app.use( 
    session({
        secret: sessionCle,
        resave: false,
        saveUninitialized: true,
        cookie: { 
            secure: false, 
            // secure : false, // true = https
            maxAge: 1000 * 60 * 30 //30 minutes 
            // La durée de vie de notre session en millisecondes
            // maxAge : 
                // 1000ms = 1 seconde
                // 60s = 1 minute
                // 30m = 1/2 heure
        }
    })
);

// Creation de routes
app.use("/", routeAcceuil);
app.use("/", routeReservation);
app.use("/", routeUtilisateur);

// On exporter l'application
module.exports = app;
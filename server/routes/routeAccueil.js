const express = require("express");
const router = express.Router();

// route [ Racine ]
router.get("/", (req, res) => {
    res.redirect("/api/accueil");
});

// Redirige vers la page d'Accueil

router.get("/api", (req, res) => {
    res.redirect("/api/accueil");
});

router.get('/api/accueil', (req, res) => {
    res.json({ message : "Bienvenu dans l'acceuil!"});
});

module.exports = router;
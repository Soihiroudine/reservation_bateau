const express = require("express");
const router = express.Router();

// route [ Racine ]
// Redirige vers la page d'acceuil
router.get("/api", (req, res) => {
    res.redirect("/api/acceuil");
});

router.get('/api/acceuil', (req, res) => {
    res.json({message: "Hello from Node.js!"});
});

module.exports = router;
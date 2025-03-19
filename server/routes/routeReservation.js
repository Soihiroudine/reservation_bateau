const express = require("express");
const router = express.Router();

// route [ Racine ]
// Redirige vers la page d'acceuil
router.get("/api/reservation", (req, res) => {
    res.json({message: "Une reservation!"});
});

router.get('/api/reservation/detail', (req, res) => {
    res.json({message: "Detail de la reservation!"});
});

module.exports = router;
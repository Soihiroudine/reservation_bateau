const express = require("express");
const router = express.Router();
const gerantControl = require("../../controllers/gerantControl");
const BateauControl = require("../../controllers/bateauControl");


const MESSAGE_CONNECTER = "Utilisateur connecté";
const MESSAGE_NON_CONNECTER = "Utilisateur non connecté";
// route [ Racine utilisateur ]

// Redirige vers la page de profil
// router.get("/api/utilisateur", (req, res) => {
//     res.redirect("/utilisateur");
// });

// route [ Connexion ]
router.get("/api/utilisateur/connexion", (req, res) => {
    if(req.session.user) {
        return res.status(200).json({
            connecter : true,
            user : req.session.user,
            message : MESSAGE_CONNECTER
        });
    }
    return res.status(401).json({
        connecter : false,
        user : {},
        message : MESSAGE_NON_CONNECTER
    });
});

router.post("/api/utilisateur/connexion",
    gerantControl.connectionGerant.bind(gerantControl)
);

// route [ Inscription ]
router.get("/api/utilisateur/inscription", (req, res) => {
    if(req.session.user) {
        return res.status(200).json({
            connecter : true,
            user : req.session.user,
            message : MESSAGE_CONNECTER
        });
    }
    return res.status(401).json({
        connecter : false,
        user : {},
        message : MESSAGE_NON_CONNECTER
    });
});

router.post("/api/utilisateur/inscription",
    gerantControl.addGerant.bind(gerantControl)
);

// route [ Deconnexion ]
router.get("/api/utilisateur/deconnexion", (req, res) => {
    // Route pour détruire la session
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({
                connecter : false,
                user : {},
                message : 'Erreur lors de la déconnexion.'
            });
        }
        res.status(200).json({
            connecter : false,
            user : {},
            message : "Déconnexion réussie"
        });
    });

});

// route [ Profil ]
router.get("/api/utilisateur/profil", (req, res) => {
    if(req.session.user) {
        return res.status(200).json({
            connecter : true,
            user : req.session.user,
            message : MESSAGE_CONNECTER
        });
    }
    return res.status(401).json({
        connecter : false, 
        user : {},
        message : MESSAGE_NON_CONNECTER
    });
});

router.get("/api/utilisateur/affichage", (req, res) => {
    if (req.session.user) {
        // Si l'utilisateur est connecté, on récupère les bateaux du gérant
        BateauControl.getBateauByIdGerant(req, res);
    } else {
        // Si l'utilisateur n'est pas connecté, on renvoie un statut 401 (Unauthorized)
        return res.status(401).json({
            connecter: false,
            user: {},
            message: MESSAGE_NON_CONNECTER, // Message approprié
            bateau: []
        });
    }
});
  
router.post("/api/utilisateur/ajout-bateau",
    BateauControl.addBateau.bind(BateauControl)
);


module.exports = router;
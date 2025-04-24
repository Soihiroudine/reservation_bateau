const Bateau = require('../models/bateau');

class BateauControl {

    constructor() {
        this.bateau = new Bateau();
    }

    addBateau(req) {
        if (!req.session.user) {
            return res.status(401).json({
                connecter: false,
                user: {},
                message: "Utilisateur non connecté",
            });
        }
        
        const nom = req.body.nomBateau;
        const place = req.body.capacite;

        if (!nom || !place) {
            return res.status(400).json({
                connecter: true,
                user: req.session.user,
                message: "Nom du bateau ou capacité manquante",
            });
        }

        const idGerant = req.session.user.idGerant;

        this.bateau.addBateau(nom, place, idGerant, (err, data) => {
            if (err) {
                console.error("Erreur lors de l'ajout du bateau :", err);
                return res.status(500).json({
                    connecter: true,
                    user: req.session.user,
                    message: "Erreur lors de l'ajout du bateau.",
                    bateau: []
                });
            }
            return res.status(201).json({
                connecter: true,
                user: req.session.user,
                message: "Bateau ajouté avec succès.",
                bateau: result, // tu peux aussi retourner juste l'ID ou le nouveau bateau ici
            });
        });
    }

    getBateauByIdGerant(req) {
        if (!req.session.user) {
            return res.status(401).json({
                connecter : false,
                user : {},
                message : "Utilisateur non connecté",
                bateau : []
            });
        }

        const idGerant = req.session.user.idGerant;

        this.bateau.getBateauByIdGerant(idGerant, (err, data) => {
            if (err) {
                console.error("Erreur lors de la récupération des bateaux :", err);
                return res.status(500).json({
                    connecter : false,
                    user : {},
                    message : "Erreur lors de la récupération des bateaux.",
                    bateau : []
                });
            }
            return res.status(200).json({
                connecter : true,
                user : req.session.user,
                message : "Bateau ajouté avec succès.",
                bateau : data
            });
        });
    }

}

module.exports = new BateauControl;
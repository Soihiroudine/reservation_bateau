const Gerant = require("../models/gerant");
const bycrypt = require("bcryptjs");

// Create and Save a new Gerant
class GerantControl {
    constructor() {
        this.gerant = new Gerant();
    }

    addGerant(req, res) {
        const nom = req.body.nom;
        const prenom = req.body.prenom;
        const email = req.body.emailInscription;
        const password = req.body.mdpInscription;

        // Hash password
        // const salt = bycrypt.genSaltSync(10);
        const hash = bycrypt.hashSync(password, 10);
        console.log("mot de passe hash : " + hash);

        this.gerant.addGerant(nom, prenom, email, hash, (err) => {
            if (err) {
                res.status(500).json({
                    message:
                        err.message || "Some error occurred while creating the Gerant."
                });
            }
            res.status(200).json({message: "Gerant ajouté"});
            // res.status(301).send({ message: "Gerant ajouté" });
            console.log("Gerant ajouté");
        });
    }

    // connection d'un gerant
    connectionGerant(req, res) {
        const email = req.body.emailConnexion;
        const password = req.body.mdpConnexion;

        if (!email || !password) {
            return res.status(500).json({
                connecter : false,
                message: "Email ou mot de passe incorrect"
            });
        }

        this.gerant.getGerantByEmail(email, (err, data) => {
            if (err) {
                res.status(500).json({
                    message:
                        err.message || "Some error occurred while retrieving gerants."
                });
            } else {
                if (data.length > 0) {
                    // On compart les mot de passe
                    // Premier parametre le mot de passe en clair
                    // Deuxieme parametre le mot de passe crypté
                    const result = bycrypt.compareSync(password, data[0].motDePasse);
                    if (result) {
                        // res.send(data);
                        req.session.user = data[0];
                        res.json({
                            connecter : true,
                            message: "Gerant connecté" 
                        });
                    } else {
                        res.status(500).send({
                            connecter : false,
                            message: "Email ou mot de passe incorrect"
                        });
                    }
                } else {
                    res.status(500).send({
                        connecter : false,
                        message: "Email ou mot de passe incorrect"
                    });
                }
            }
        });
    }

    // Retrieve all Gerants from the database.
    getGerant(req, res) {
        this.gerant.getGerant((err, data) => {
            if (err) {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving gerants."
                });
            } else res.send(data);
        });
    }
}

module.exports = new GerantControl;
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
        const salt = bycrypt.genSaltSync(10);
        const hash = bycrypt.hashSync(password, salt);

        this.gerant.addGerant(nom, prenom, email, hash, (err, data) => {
            if (err) {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while creating the Gerant."
                });
            } else res.send(data);
        });
    }

    // connection d'un gerant
    connectionGerant(req, res) {
        const email = req.body.email;
        const password = req.body.password;


        this.gerant.getGerantByEmail(email, (err, data) => {
            if (err) {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving gerants."
                });
            } else {
                if (data.length > 0) {
                    // On compart les mot de passe
                    // Premier parametre le mot de passe en clair
                    // Deuxieme parametre le mot de passe crypté
                    const result = bycrypt.compareSync(password, data[0].password);
                    if (result) {
                        res.send(data);
                    } else {
                        res.status(500).send({
                            message: "Email ou mot de passe incorrect"
                        });
                    }
                } else {
                    res.status(500).send({
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
const Bateau = require('../models/bateau');

class BateauControl {

    constructor() {
        this.bateau = new Bateau();
    }

    addBateau(req, res) {
        const nom = req.body.nomBateau;
        const place = req.body.nbPlace;
        const idGerant = req.session.user.idGerant;

        this.bateau.addBateau(nom, place, idGerant, (err) => {
            if (err) {
                res.status(500).json({
                    message:
                        err.message || "Some error occurred while creating the Bateau."
                });
            }
            res.status(200).json({message: "Bateau ajouté"});
            console.log("Bateau ajouté");
        });
    }

    getBateauByIdGerant(req, res) {

        const idGerant = req.session.user.idGerant;

        this.bateau.getBateauByIdGerant(idGerant, (err, data) => {
            if (err) {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving bateau."
                });
            } else {
                res.status(200).json({data : data});
            }
        });
    }

}

module.exports = BateauControl;
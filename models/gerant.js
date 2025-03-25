const db = require("./../server/config/db.js");

class Gerant {
  constructor() {}

  addGerant(nom, prenom, email, password, callback) {
    db.query("INSERT INTO gerant (nom, prenom, email, password) VALUES (?, ?, ?, ?)",
        [nom, prenom, email, password], (err, res) => {
            (err, res) => {
                if (err) {
                    return callback(err, null);
                    }
                callback(null, res);
            }
        });
    }

    // On veut avoir un gerant par son email
    getGerantByEmail(email, callback) {
        db.query("SELECT * FROM gerant WHERE email = ?", [email], (err, res) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, res);
        });
    }
    
    getGerant(callback) {
        db.query("SELECT * FROM gerant", (err, res) => {
            if (err) {
                return callback(err, null);
            }
            callback(null, res);
        });
    }
}

module.exports = Gerant;
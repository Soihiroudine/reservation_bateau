-- Creation de la base de données (BDD)
CREATE DATABASE IF NOT EXISTS sortie_bateau;

-- On va se mettre dans la BDD
USE sortie_bateau; 

-- On va y ajouter des table

CREATE TABLE IF NOT EXISTS client (
    idClient INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nomClient VARCHAR(100) NOT NULL,
    prenomClient VARCHAR(100) NOT NULL,
    emailClient VARCHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS gerant (
    idGerant INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nomGerant VARCHAR(100) NOT NULL,
    prenomGerant VARCHAR(100) NOT NULL,
    emailGerant VARCHAR(200) NOT NULL,
    motDePasse VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS bateau (
    idBateau INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nomBateau VARCHAR(100) NOT NULL,
    nbPlace INT NOT NULL,
    idGerant INT NOT NULL,
    FOREIGN KEY (idGerant) REFERENCES gerant(idGerant)
);

CREATE TABLE IF NOT EXISTS planning (
    idPlanning INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    dateDebut DATE NOT NULL,
    dateRetoure DATE NOT NULL,
    heureDebut TIME NOT NULL,
    heureRetoure TIME NOT NULL,
    lieuDepart VARCHAR(200) NOT NULL,
    lieuArrive VARCHAR(200) NOT NULL,
    prixBase INT NOT NULL,
    idBateau INT NOT NULL,
    FOREIGN KEY (idBateau) REFERENCES bateau(idBateau)
);

CREATE TABLE IF NOT EXISTS reservation (
    idReservation INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nbPersonnes INT NOT NULL,
    prixReservation INT NOT NULL, -- en fonction du nombre de personnes nbpersonne * prixBase
    idPlanning INT NOT NULL,
    FOREIGN KEY (idPlanning) REFERENCES planning(idPlanning),
    idClient INT NOT NULL,
    FOREIGN KEY (idClient) REFERENCES client(idClient)
);

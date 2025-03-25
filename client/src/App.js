// import React, { useEffect, useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './page/Accueil';
import Reservation from './page/Reservation';
import Utilisateur from './page/Utilisateur';
import Connexion from './page/Connexion';
import Inscription from './page/Inscription';

function App() {
  return (
    <Router>

      {/* Définition des routes*/}

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/utilisateur" element={<Utilisateur />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </Router>
  );
}

export default App;
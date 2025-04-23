// import React, { useEffect, useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Accueil from './page/Accueil';
import Reservation from './page/Reservation';
import Utilisateur from './page/Utilisateur';
import Connexion from './page/Connexion';
import Inscription from './page/Inscription';
import Logout from './page/Logout';
import NonExistant from './page/NonExistant';

function App() {
  return (
    <Router>
      <ToastContainer /> {/* Composant pour afficher les notifications */}

      {/* Définition des routes*/}

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/utilisateur" element={<Utilisateur />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/logout" element={<Logout />} /> {/* Redirection vers la page d'accueil après déconnexion */}
        <Route path="*" element={<NonExistant />} /> {/* Redirection vers la page d'accueil pour les routes non définies */}
      </Routes>
    </Router>
  );
}

export default App;
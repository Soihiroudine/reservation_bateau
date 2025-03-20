// import React, { useEffect, useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Accueil from './page/Accueil';
import Reservation from './page/Reservation';
import Utilisateur from './page/Utilisateur';

function App() {
  return (
    <Router>
    {/* 
      <nav>
        <ul>
          <li to="/">Accueil<Link /></li>
        </ul>
      </nav> */}

      {/* Définition des routes */}

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/utilisateur" element={<Utilisateur />} />
      </Routes>
    </Router>
  );
}

export default App;
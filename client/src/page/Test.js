import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';

const Chargement = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulation d’un chargement
    setTimeout(() => {
      setData("Données chargées ✅");
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      {loading ? (
        <>
          <ClipLoader
            color="#36d7b7"
            size={50}
            speedMultiplier={1}
          />
          <p style={{ marginTop: '20px' }}>Chargement en cours...</p>
        </>
      ) : (
        <h2>{data}</h2>
      )}
    </div>
  );
};

export default Chargement;

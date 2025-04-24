import { ClipLoader } from 'react-spinners';

const Chargement = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <ClipLoader
            color="#36d7b7"
            size={50}
            speedMultiplier={1}
          />
          <p style={{ marginTop: '20px' }}>Chargement en cours...</p>
    </div>
  );
};

export default Chargement;

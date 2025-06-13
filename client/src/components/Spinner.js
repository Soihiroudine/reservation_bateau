import { ClipLoader } from 'react-spinners';

const Chargement = ({ color = "#36d7b7", size = 50, text = "Chargement en cours..." }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <ClipLoader color={color} size={size} speedMultiplier={1} />
      <p style={{ marginTop: '20px' }}>{text}</p>
    </div>
  );
};

export default Chargement;

import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div>
      <h2>Contact Page</h2>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
}

export default Contact;
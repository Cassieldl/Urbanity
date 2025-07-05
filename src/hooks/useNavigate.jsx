// src/components/Login.jsx
import { useNavigate } from 'react-router-dom';

function Navigation() { 
  const navigate = useNavigate();

  const handleGoToPage = (path) => {
    navigate(path);
  };

  return (
    <div>
      <button onClick={() => handleGoToPage('/')}>Go to Home</button>
      <button onClick={() => handleGoToPage('/signup')}>Go to Sign Up</button>
      <button onClick={() => handleGoToPage('/signin')}>Go to Sign In</button>
      <button onClick={() => handleGoToPage('/checkout')}>Go to Checkout</button>
      <button onClick={() => handleGoToPage('/dashboard')}>Go to Dashboard</button>
    </div>
  );
}

export default Navigation;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = ({ setIsLoggedIn }) => {
  let navigate = useNavigate();

  const handleLogin = () => {
    
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">Log In</button>
      </div>
    </div>
  );
};

export default Login;

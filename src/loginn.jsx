import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [error, setError] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleRepasswordChange(e) {
    setRepassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (password === repassword) {
      // Handle form submission or further logic here
      console.log('Form submitted:', { email, password, repassword });
      setError(false);
       navigate('/aboutme2');
  
      axios.post('http://localhost:5001/login',{email,password});
    }
    else {
      setError(true);
    }
  }

  return (
    <div>
      <div className="container">
        <div className="content">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <h2>Email</h2>
            <div className="box2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <h2>Password</h2>
            <div className="box3">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <h2>Re-enter Password</h2>
            <div className="box4">
              <input
                type="password"
                placeholder="Enter your password again"
                value={repassword}
                onChange={handleRepasswordChange}
              />
            </div>
            <div className="button">
              <button type="submit">Login</button>
            </div>
          </form>
          {error && <p style={{ color: 'red' }}>Passwords do not match.</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;
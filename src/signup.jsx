import { useState } from 'react';
import './signn.css';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [error, setError] = useState('');

  function handleChanges1(e) {
    setUsername(e.target.value);
  }

  function handleChanges2(e) {
    setEmail(e.target.value);
  }

  function handleChanges3(e) {
    setPassword(e.target.value);
  }

  function handleChanges4(e) {
    setRepassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!username || !email || !password || !repassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== repassword) {
      setError('Passwords do not match.');
      return;
    }

  
    setError('');
    navigate('/login');
    axios.post('http://localhost:5001/signup',{username,email,password});
  }

  return (
    <div>
      <div className="container">
        <div className="content">
          <h1>Register</h1>
          <h2>Username</h2>
          <div className="box1">
            <input type="text" placeholder="Enter your username" value={username} onChange={handleChanges1} />
          </div>
          <h2>Email</h2>
          <div className="box2">
            <input type="email" placeholder="Email" value={email} onChange={handleChanges2} />
          </div>
          <h2>Password</h2>
          <div className="box3">
            <input type="password" placeholder="Enter your password" value={password} onChange={handleChanges3} />
          </div>
          <h2>Re-enter Password</h2>
          <div className="box4">
            <input type="password" placeholder="Enter your password again" value={repassword} onChange={handleChanges4} />
          </div>
          {error && <p>{error}</p>}
          <div className="button">
            <button onClick={handleSubmit}>Sign up</button>
            <h1>Your username : {username}</h1>
            <h1>Your email : {email}</h1>
            <h1>Your password : {password}</h1>
            <h1>Your re-entered password : {repassword}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
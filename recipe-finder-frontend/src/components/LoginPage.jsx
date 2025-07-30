// LoginPage.jsx

import { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://recipe-finder-5-gzng.onrender.com/login', { email, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      // Redirect user to home page
      window.location.href = '/home';
    } catch (error) {
      console.error('Error logging in:', error.response.data.message);
      alert('Invalid email or password');
    }
  };

  return (
    
    <div className='loggin'>
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;

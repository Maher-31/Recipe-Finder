// SignupPage.jsx

import React, { useState } from 'react';
import axios from 'axios';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
       const rese=await axios.post('https://recipe-finder-5-gzng.onrender.com/signup', { email, password });
      alert('Signup successful');
      if(!rese){
        throw new Error;
      }
      // Redirect user to login page
      window.location.href = '/login';
    } catch (error) {
      console.error('Error signing up:', error.response.data.message);
      alert('Error signing up');
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default SignupPage;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const rese = await axios.post('https://recipe-finder-5-gzng.onrender.com/signup', { email, password });
      alert('Signup successful');
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error.response?.data?.message || error.message);
      alert('Error signing up');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        disabled={loading}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Signing up...' : 'Signup'}
      </button>
    </form>
  );
}

export default SignupPage;

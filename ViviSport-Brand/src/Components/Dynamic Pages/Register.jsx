import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../../styles/login.css' // Using the same styles as Login

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // FIXED: Pointing to YOUR actual backend
      const response = await fetch('http://localhost/vivi-backend/signup.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert("Registration Successful! Please Log In.");
        navigate('/login');
      } else {
        alert(data.message || 'Registration failed');
      }

    } catch (error) {
      console.error('Registration error:', error);
      alert('Could not connect to the server. Check if XAMPP is running.');
    }
  };

  return (
    <div className="login-card">
        <Link to="/" className="brand-logo">44:11</Link>
        <p className="login-subtitle">Create your account</p>

         <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required
            />
            <input 
                type="email" 
                className="form-control" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
            />
            <input 
                type="password" 
                className="form-control" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
            />
            
            <button type="submit" className="btn-login">Register</button>
        </form>

        <p style={{marginTop: '1rem', textAlign: 'center'}}>
            Already have an account? <Link to="/login">Log In</Link>
        </p>
    </div>
  )
}

export default Register
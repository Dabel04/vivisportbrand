import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      // 1. Determine how to parse the data based on Content-Type
      const contentType = response.headers.get("content-type");
      let data;
      
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      // 2. Handle Success
      if (response.ok) {
        // data is assumed to be the user object here
        localStorage.setItem('user_id', data.user.id);
        localStorage.setItem('username', data.user.username);
        navigate('/');
      } 
      // 3. Handle Server-Side Errors (400, 500, etc.)
      else {
        const errorMessage = typeof data === 'object' ? data.message : data;
        alert(errorMessage || 'Registration failed');
      }

    } catch (error) {
      // 4. Handle Network Errors
      console.error('Registration error:', error);
      alert('Could not connect to the server.');
    }
  };
  return (
    <>
    <div className="login-card">
        <a href="#" className="brand-logo">44:11</a>
        <p className="login-subtitle">Sign in to manage your store</p>

         <form onSubmit={handleSubmit}>
            <input type="text" className="form-control" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
            <input type="email" className="form-control" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="password" className="form-control" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            
            <button type="submit" className="btn-login">Sign In</button>
        </form>

        
    </div>
    </>
  )
}

export default Register
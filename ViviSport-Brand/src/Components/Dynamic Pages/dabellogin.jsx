import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/login.css'

function Login() {
  // We rename 'email' to 'identifier' since it can be either
  const [identifier, setIdentifier] = useState('') 
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('http://localhost/vivi-backend/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // We send 'identifier' to match the PHP script we just wrote
        body: JSON.stringify({ identifier, password }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user));
        alert("Login Successful! Welcome " + data.user.username);
        navigate('/admin/dashboard'); 
      } else {
        alert(data.message || 'Login failed');
      }

    } catch (error) {
      console.error('Login error:', error);
      alert('Could not connect to server. Check XAMPP.');
    }
  }

  return (
    <>
     <div className="login-card">
        <Link to="/" className="brand-logo">44:11</Link>
        <p className="login-subtitle">Sign in to manage your store</p>

         <form onSubmit={handleSubmit}>
            {/* CHANGED: type="text" to allow usernames, placeholder updated */}
            <input 
                type="text" 
                className="form-control" 
                placeholder="Username or Email" 
                value={identifier} 
                onChange={(e) => setIdentifier(e.target.value)} 
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
            
            <button type="submit" className="btn-login">Sign In</button>
        </form>

        <a href="#" className="forgot-link">Forgot your password?</a>

        <div>
          New to 44:11 ? <Link to='/register'><span>Register Now</span></Link>
        </div>
    </div>
    </>
  )
}

export default Login
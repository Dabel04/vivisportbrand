import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/login.css'

function Login() {
  const [email, setEmail] = useState('') // FIXED: Removed hardcoded email
  const [password, setPassword] = useState('') // FIXED: Removed hardcoded password
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
      const text = await response.text(); // Get the raw text to see the PHP error
      console.error("Server Error Output:", text);
      throw new Error("Server returned an error");
}
      
      const data = await response.json();
      
      // FIXED: Check data.success, not just response.ok
      if (data.success) {
        // Storing the user object returned by PHP
        localStorage.setItem('user', JSON.stringify(data.user));
        alert("Login Successful!");
        navigate('/admin/dashboard'); // Or wherever you want them to go
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login connection failed.');
    }
  }

  return (
    <>
     <div className="login-card">
        <a href="#" className="brand-logo">44:11</a>
        <p className="login-subtitle">Sign in to manage your store</p>

         <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                className="form-control" 
                placeholder="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
            />
            <input 
                type="password" 
                className="form-control" 
                placeholder="••••••••" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
            />
            
            <button type="submit" className="btn-login">Sign In</button>
        </form>

        <a href="#" className="forgot-link">Forgot your password?</a>

        <div>
          New to 44:11 ? <Link to='/signup'><span>Register Now</span></Link>
        </div>
    </div>
    </>
  )
}

export default Login
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/login.css'

function Login() {
  const [email, setEmail] = useState('admin4411@gmail.com')
  const [password, setPassword] = useState('password')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email === 'admin4411@gmail.com' && password === 'password') {
      navigate('/admin/dashboard')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <>
     <div className="login-card">
        <a href="#" className="brand-logo">44:11</a>
        <p className="login-subtitle">Sign in to manage your store</p>

         <form onSubmit={handleSubmit}>
            <input type="email" className="form-control" placeholder="username" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type="password" className="form-control" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            
            <button type="submit" className="btn-login">Sign In</button>
        </form>

        <a href="#" className="forgot-link">Forgot your password?</a>
    </div>
    </>
  )
}

export default Login
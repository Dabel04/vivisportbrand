import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/login.css' // Reusing your login styles

function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    
    try {
        // FIXED: Pointing to the correct folder 'vivi-backend'
        const response = await fetch('http://localhost:8080/signup.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, username })
        });
        
        const data = await response.json();
        console.log(data)
        console.log(response)

        if (data.success) {
            alert("Success! " + data.message);
            navigate('/'); 
        } else {
            alert("Error: " + data.message);
        }
    } catch (error) {
        console.error("Connection Error:", error);
        alert("not connecting to php");
    }
  }
  return (
    <div className="login-card">
        <h2 className="brand-logo">44:11</h2>
        <p className="login-subtitle">Create your account</p>

         <form onSubmit={handleSignup}>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Your Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required
            />
            <input 
                type="email" 
                className="form-control" 
                placeholder="Email address" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
            />
            <input 
                type="password" 
                className="form-control" 
                placeholder="Create Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required
            />
            
            <button type="submit" className="btn-login">Sign Up</button>
        </form>

        <p style={{marginTop: '1rem', textAlign: 'center'}}>
            Already have an account? <a href="/login">Log In</a>
        </p>
    </div>
  )
}

export default Signup
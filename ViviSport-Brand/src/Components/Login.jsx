import React from 'react'
import '../styles/login.css'

function Login() {
  return (
    <>
     <div class="login-card">
        <a href="#" class="brand-logo">44:11</a>
        <p class="login-subtitle">Sign in to manage your store</p>

         <form action="admin-dashboard.html">
         {/* Links to dashboard for demo */} 
            <input type="email" class="form-control" placeholder="admin@4411.com" value="admin@4411.com" required/>
            <input type="password" class="form-control" placeholder="••••••••" value="password" required/>
            
            <button type="submit" class="btn-login">Sign In</button>
        </form>

        <a href="#" class="forgot-link">Forgot your password?</a>
    </div>
    </>
  )
}

export default Login
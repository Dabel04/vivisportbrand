import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/style.css'

function LandingPage() {
  return (
    <>
    {/* This is where you select to navigate the pages */}
      <div className='navigation'>    
   <Link to='/shop'>
    Shop
   </Link>   
   <Link to='/blog'>
    Blog
   </Link>
   <Link to='/about'>
    About
   </Link>
   <Link to='/faq'>
    Faq
   </Link>
   <Link to='/contact'>
    Contact
   </Link>
    </div>
    </>


  )
}

export default LandingPage
import React from 'react'
import NavBar from './NavBar'
function Header({setShowCheckOut}) {
  return (
    <>
      <NavBar setShowCheckOut={setShowCheckOut}/>
    </>
  )
}

export default Header
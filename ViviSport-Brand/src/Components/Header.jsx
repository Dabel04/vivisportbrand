import React from 'react'
import NavBar from './NavBar'
function Header({setShowCheckOut}) {
  console.log('ffff')
  return (
    <>
      <NavBar setShowCheckOut={setShowCheckOut}/>
    </>
  )
}

export default Header
import React from 'react'
import '../styles/NavBar.css'

function NavBar({ showNav, setShowNav }) {


  function handleShowNav() {
    setShowNav(!showNav)
  }
  return (
    <div className='nav-bar'>
      <p className='nav-btn' 
                    onClick={handleShowNav}>{showNav ? null : '≡'}</p>
    </div>
  )
}

export default NavBar
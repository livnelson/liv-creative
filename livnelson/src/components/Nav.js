import React, { useState } from 'react'
import NavBar from './NavBar'
import NavLinks from './NavLinks'
import '../styles/Nav.css'

function Nav() {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav">
      {showNav ? <NavLinks
        showNav={showNav}
        setShowNav={setShowNav} /> :
        <NavBar
          showNav={showNav}
          setShowNav={setShowNav}
        />}
    </div>
  )
}

export default Nav
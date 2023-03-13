import React from 'react'
import { HashLink } from 'react-router-hash-link'
import '../styles/NavLinks.css'

function NavLinks({ showNav, setShowNav }) {

  function handleShowNav() {
    setShowNav(!showNav)
  }

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    const yOffset = -80
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
  }

  return (
    <div className='nav-menu'>
      <div className="nav-links">
        <ul className="link-group">
          <p className='nav-btn' onClick={handleShowNav}>{showNav ? '×' : null}</p>
          <li className="link" onClick={handleShowNav}><HashLink smooth to='#home'>home</HashLink></li>
          <li className="link" onClick={handleShowNav}><HashLink smooth to='#about' scroll={el => scrollWithOffset(el)}>about</HashLink></li>
          <li className="link" onClick={handleShowNav}><HashLink smooth to='#skills' scroll={el => scrollWithOffset(el)}>skills</HashLink></li>
          <li className="link" onClick={handleShowNav}><HashLink smooth to='#projects' scroll={el => scrollWithOffset(el)}>projects</HashLink></li>
          <li className="link" onClick={handleShowNav}><HashLink smooth to='#social-links' scroll={el => scrollWithOffset(el)}>social links</HashLink></li>
          {/* <li className="link" onClick={handleShowNav}><HashLink smooth to='#experience' scroll={el => scrollWithOffset(el)}>experience</HashLink></li>
          <li className="link" onClick={handleShowNav}><HashLink smooth to='#education' scroll={el => scrollWithOffset(el)}>education</HashLink></li> */}
          <li className="link" onClick={handleShowNav}><HashLink smooth to='#contact' scroll={el => scrollWithOffset(el)}>contact </HashLink></li>
        </ul>
      </div>
    </div>
  )
}

export default NavLinks
import React from 'react'
import '../styles/SocialLinks.css'

// function handleLinkedIn() {
//   <a href="https://www.linkedin.com/in/olivia-nelson/" _target="_blank" norefer></a>
// }

// function handleGithub() {

// }

function SocialLinks() {
  return (
    <div className='social-links-section' id='social-links'>
      <h2 className='sub-heading'>Social Links</h2>
      <div className='social-icons'>
        <a href="https://www.linkedin.com/in/olivia-nelson/" target="_blank" rel="noreferrer">
          <img className='social'
            src="https://res.cloudinary.com/dovuffpii/image/upload/v1677702552/icons/linkedin-icon_cwidkk.png" alt="LinkedIn" />
        </a>

        <a href="https://github.com/livnelson" target="_blank" rel="noreferrer">
          <img className='social' src="https://res.cloudinary.com/dovuffpii/image/upload/v1677702542/icons/github-icon_egjnjo.png" alt="Github" />
        </a>

        <a href="mailto:livnelson@me.com" target="_blank" rel="noreferrer">
          <img className='social' src="https://res.cloudinary.com/dovuffpii/image/upload/v1677703859/icons/email-icon_vsbpou.png" alt="Email" />
        </a>
      </div>
    </div>
  )
}

export default SocialLinks
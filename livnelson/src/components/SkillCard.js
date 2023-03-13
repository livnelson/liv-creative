import React from 'react'
import '../styles/SkillCard.css'


function SkillCard({ skill, stars, skillLogo }) {
  return (
    <div className='skill-card'>
      {/* <img className='skill-card-logo' src={skillLogo} alt={skill} /> */}
      <p className='skill-title'>{skill}</p>
      <p className='skill-card-stars'>{stars}</p>
    </div>
  )
}

export default SkillCard

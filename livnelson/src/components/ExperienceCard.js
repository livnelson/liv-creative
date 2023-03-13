import React, { useState } from 'react'
import '../styles/ExperienceCard.css'

function ExperienceCard({ company, title, jobDesc, dates }) {
  const [showDesc, setShowDesc] = useState(false)

  function handleShowDesc() {
    setShowDesc(!showDesc)
  }

  return (
    <div className='experience-card'>
      <p className='job-company'>{company}</p>
      <div className='job-title-dates'>
        <h4 className='job-title'>{title}</h4>
        <h4 className='job-dates'>{dates}</h4>
      </div>
      {showDesc ? <p className='job-desc'>{jobDesc}</p> : null}
      <button className='job-btn' onClick={handleShowDesc}>{showDesc ? 'Hide Job Description' : 'Learn More About This Job'}</button>
    </div>
  )
}

export default ExperienceCard
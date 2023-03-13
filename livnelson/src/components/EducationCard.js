import React from 'react'
import '../styles/EducationCard.css'

function EducationCard({ school, subject, year, description }) {

  return (
       <div className='education-card'>
      <p className='school'>{school}</p>
      <h4 className='subject'>{subject}</h4>
      <p className='description'>{description}</p>
      <p className='year'><em>{year}</em></p>
    </div>
  )
}

export default EducationCard
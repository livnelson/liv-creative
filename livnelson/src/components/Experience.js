import React, { useState, useEffect } from 'react'
import ExperienceCard from './ExperienceCard'
import '../styles/Experience.css';

function Experience() {
  const [errors, setErrors] = useState([])
  const [experiences, setExperiences] = useState([])

  // useEffect(() => {
  //   fetch('/experiences').then((r) => {
  //     if (r.ok) {
  //       r.json().then((experiences) => {
  //         console.log(experiences)
  //         setExperiences(experiences)
  //       });
  //     } else {
  //       r.json().then((err) => setErrors(err.errors));
  //     }
  //   });
  // }, [])

  const mappedExperiences = experiences.map((experience) => {
    return <ExperienceCard
      key={experience.id}
      id={experience.id}
      company={experience.company}
      title={experience.title}
      jobDesc={experience.job_desc}
      dates={experience.dates}
    />
  })

  return (
    <div className='experience-section' id='experience'>
      <h2 className='sub-heading'>Experience</h2>
      <div className='experience'>
        {mappedExperiences}
      </div>
      {/* {errors ? <div className="errors">{errors}</div> : null} */}
    </div>
  )
}

export default Experience
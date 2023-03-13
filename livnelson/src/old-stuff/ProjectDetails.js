import React, { useState } from 'react'
import '../styles/ProjectDetails.css'

function ProjectDetails({ id, title, description, problem, learned, technology, goals, projectImg, mappedSkills, showDetails, setShowDetails, githubLink, demoLink }) {
  const [showDemoLink, setShowDemoLink] = useState(false)

  function handleClick() {
    setShowDetails(!showDetails)
  }

  function handleDemoClick() {
    setShowDemoLink(!showDemoLink)
  }

  return (
    <div className='project-details'>
      <div className='project-details-content'>
        <img className='project-details-img' src={projectImg} alt={title} />
        {/* <h3 className='project-name'>{title}</h3> */}
        <h3 className='project-details-overview'>Overview</h3>
        <p className='project-details-desc'>{description}</p>
        <h3 className='project-details-tech'>Technologies</h3>
        <p className='project-tech-details'>{technology}</p>
        <br />
        <button className='project-link'><a className='proj-btn-link' href={githubLink} target='_blank' rel="noreferrer">Github Repo</a></button>
        <button className='project-link' onClick={handleDemoClick}>{showDemoLink ? 'Coming Soon!' : 'Live Demo'}</button>
        <button className='back-home' onClick={handleClick}>Close</button>
      </div>
    </div>
  )
}

export default ProjectDetails
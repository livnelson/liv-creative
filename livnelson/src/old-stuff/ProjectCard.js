import React, { useState } from 'react'
import ProjectDetails from './ProjectDetails'
import '../styles/ProjectCard.css'

function ProjectCard() {
  const [showDetails, setShowDetails] = useState(false)

  function handleClick() {
    setShowDetails(!showDetails)
  }

  return (
    <>
      <div className='project-card-1'
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dovuffpii/image/upload/v1677692523/projects/myflix_ob6agt.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className='project-detail-info'>
          <h3 className='project-title'>Myflix</h3>
          <h5 className='project-technologies'>Technologies Used:</h5>
          <p className='project-card-tech'>React, Rails</p>
          <br />
          <button className='project-details-btn' onClick={handleClick}>Learn More</button>
        </div>
        {showDetails ? <ProjectDetails /> : null}
      </div>
      <div className='project-card-2'
        style={{
          backgroundImage: `url("https://res.cloudinary.com/dovuffpii/image/upload/v1677692523/projects/myflix_ob6agt.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
        <div className='project-detail-info'>
          <h3 className='project-title'>National Park Road Trip Planner</h3>
          <h5 className='project-technologies'>Technologies Used:</h5>
          <p className='project-card-tech'>React, Rails</p>
          <br />
          <button className='project-details-btn' onClick={handleClick}>Learn More</button>
        </div>
        {showDetails ? <ProjectDetails /> : null}
      </div>
    </>
  )
}

export default ProjectCard
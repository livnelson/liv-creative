import React, { useState } from 'react'
// import ProjectCard from './ProjectCard'
// import ProjectDetails from './ProjectDetails'
import '../styles/Projects.css'
import '../styles/ProjectCard.css'
import '../styles/ProjectDetails.css'



function Projects() {
  // const [errors, setErrors] = useState([])
  // const [projects, setProjects] = useState([])
  const [showMyflix, setShowMyflix] = useState(false)
  const [showRoadTrip, setShowRoadTrip] = useState(false)
  const [showInstaFame, setShowInstaFame] = useState(false)
  const [showRoadTripDemoLink, setShowRoadTripDemoLink] = useState(false)
  const [showInstaFameDemoLink, setShowInstaFameDemoLink] = useState(false)

  function handleMyflix() {
    setShowMyflix(!showMyflix)
  }

  function handleRoadTrip() {
    setShowRoadTrip(!showRoadTrip)
  }

  function handleInstaFame() {
    setShowInstaFame(!showInstaFame)
  }

  function handleRoadTripDemoClick() {
    setShowRoadTripDemoLink(!showRoadTripDemoLink)
  }
  
  function handleInstaFameDemoClick() {
    setShowInstaFameDemoLink(!showInstaFameDemoLink)
  }


  return (
    <div className='projects-section' id='projects'>
      <h2 className='sub-heading'>Recent Projects</h2>
      {/* {errors ? <div className="errors">{errors}</div> : null} */}
      <div className='projects'>
        <div className='project-card'
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
            <button className='project-details-btn' onClick={handleMyflix}>Learn More</button>
          </div>
          {showMyflix ? <div className='project-details'>
            <div className='project-details-content'>
              <img className='project-details-img' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677692523/projects/myflix_ob6agt.jpg' alt='Myflix' />
              <h3 className='project-details-overview'>Overview</h3>
              <p className='project-details-desc'>A Netflix clone app that allows users to log in and view movie trailers, add movies to
                favorites and search titles</p>
              <h3 className='project-details-tech'>Technologies</h3>
              <ul className='project-tech-details'>         
                <li>React</li>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
              </ul>
              <br />
              <button className='project-link'><a className='proj-btn-link' href='https://github.com/livnelson/Myflix' target='_blank' rel="noreferrer">Github Repo</a></button>
              <button className='project-link'> <a className='proj-btn-link'href="https://myflix-db.onrender.com/" target='_blank' rel="noreferrer">Deployed Demo</a></button>
              <button className='back-home' onClick={handleMyflix}>Close</button>
            </div>
          </div> : null}
        </div>

        <div className='project-card'
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dovuffpii/image/upload/v1677692523/projects/road-trip_tjppal.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          <div className='project-detail-info'>
            <h3 className='project-title'>National Park Trip Planner</h3>
            <h5 className='project-technologies'>Technologies Used:</h5>
            <p className='project-card-tech'>React, Rails</p>
            <br />
            <button className='project-details-btn' onClick={handleRoadTrip}>Learn More</button>
          </div>
          {showRoadTrip ? <div className='project-details'>
            <div className='project-details-content'>
              <img className='project-details-img' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677692523/projects/road-trip_tjppal.jpg' alt='Myflix' />
              <h3 className='project-details-overview'>Overview</h3>
              <p className='project-details-desc'>This app helps users plan trips and available activities to National Parks located in the
                State of California</p>
              <h3 className='project-details-tech'>Technologies</h3>
              <ul className='project-tech-details'>
                <li>React</li>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
              </ul>
              <br />
              <button className='project-link'><a className='proj-btn-link' href='https://github.com/livnelson/National-Park-Trip-Planner' target='_blank' rel="noreferrer">Github Repo</a></button>
              <button className='project-link' onClick={handleRoadTripDemoClick}>{showRoadTripDemoLink ? 'Coming Soon!' : 'Deployed Demo'}</button>
              <button className='back-home' onClick={handleRoadTrip}>Close</button>
            </div>
          </div> : null}
        </div>

        <div className='project-card'
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dovuffpii/image/upload/v1677692523/projects/instafame_m9sal9.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
          <div className='project-detail-info'>
            <h3 className='project-title'>InstaFame</h3>
            <h5 className='project-technologies'>Technologies Used:</h5>
            <p className='project-card-tech'>React, Sinatra</p>
            <br />
            <button className='project-details-btn' onClick={handleInstaFame}>Learn More</button>
          </div>
          {showInstaFame ? <div className='project-details'>
            <div className='project-details-content'>
              <img className='project-details-img' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677692523/projects/instafame_m9sal9.jpg' alt='Myflix' />
              <h3 className='project-details-overview'>Overview</h3>
              <p className='project-details-desc'>Social media style message and picture sharing application inspired by Instagram</p>
              <h3 className='project-details-tech'>Technologies</h3>
              <ul className='project-tech-details'>
                <li>React</li>
                <li>Ruby on Rails</li>
                <li>Sinatra</li>
              </ul>
              <br />
              <button className='project-link'><a className='proj-btn-link' href='https://github.com/livnelson/InstaFame' target='_blank' rel="noreferrer">Github Repo</a></button>
              <button className='project-link' onClick={handleInstaFameDemoClick}>{showInstaFameDemoLink ? 'Coming Soon!' : 'Deployed Demo'}</button>
              <button className='back-home' onClick={handleInstaFame}>Close</button>
            </div>
          </div> : null}
        </div>
      </div>
    </div>
  )
}

export default Projects
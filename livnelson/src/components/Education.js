import React, { useState } from 'react'
import EducationCard from './EducationCard'
import '../styles/Education.css';

function Education() {
  // const [errors, setErrors] = useState([])
  // const [education, setEducation] = useState([])

  // useEffect(() => {
  //   fetch('/education').then((r) => {
  //       if (r.ok) {
  //         r.json().then((education) => {
  //             console.log(education)
  //             setEducation(education)
  //         });
  //       } else {
  //         r.json().then((err) => setErrors(err.errors));
  //       }
  //     });
  // },[])

  // const mappedEducation = education.map((edu) => {
  //   return <EducationCard 
  //           key={edu.id}
  //           id={edu.id}
  //           school={edu.school}
  //           subject={edu.subject}
  //           year={edu.year}
  //           description={edu.description}
  //          />
  // })
  
  return (
    <div className='education-section' id='education'>
      <h2 className='sub-heading'>Education</h2>
      <div className='education'>
      {/* {mappedEducation} */}
      </div>
      {/* {errors ? <div className="errors">{errors}</div> : null} */}
    </div>
  )
}

export default Education
import React, { useState, useEffect } from 'react'
import SkillCard from './SkillCard'
import '../styles/Skills.css'

function Skills() {
  const [errors, setErrors] = useState([])
  const [skills, setSkills] = useState([])

  // useEffect(() => {
  //   fetch('/skills').then((r) => {
  //     if (r.ok) {
  //       r.json().then((skills) => {
  //         console.log(skills)
  //         setSkills(skills)
  //       });
  //     } else {
  //       r.json().then((err) => setErrors(err.errors));
  //     }
  //   });
  // }, [])

  // const mappedSkills = skills.map((skill) => {
  //   return <SkillCard
  //     key={skill.id}
  //     id={skill.id}
  //     skill={skill.skill}
  //     stars={skill.stars}
  //     skillLogo={skill.skill_logo}
  //   />
  // })

  return (
    <div id='skills'>
      <div div className='skills-section' >
        <h2 className='skills-heading'>Skills</h2>
        <div className='skills'>
          {/* {mappedSkills} */}
          <img className='skill-image' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677632132/skills/javascript_qvsvgu.png' alt='JavaScript' />
          <img className='skill-image' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677632132/skills/react_cfjxcg.png' alt='React' />
          <img className='skill-image' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677632133/skills/ruby_fs8aim.png' alt='Ruby' />
          <img className='skill-image' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677632132/skills/rails_ueywtk.png' alt='Rails' />
          <img className='skill-image' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677632131/skills/adobe_uamue1.png' alt='Adobe Creative Suite' />
          <img className='skill-image' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677632131/skills/html_f1e3bf.png' alt='HTML' />
          <img className='skill-image' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677632131/skills/css_tksdbv.png' alt='CSS/SaSS' />
          <img className='skill-image' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677632133/skills/wordpres_ubmgy0.png' alt='WordPress' />
          <img className='skill-image' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677632132/skills/postgres_adqo0x.png' alt='PostgreSQL' />
          <img className='skill-image' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677689906/skills/typescript_uek5co.png' alt='TypeScript' />
          <img className='skill-image' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677632901/skills/solidjs_aec8n3.png' alt='Solid.js' />
          <img className='skill-image' src='https://res.cloudinary.com/dovuffpii/image/upload/v1677632133/skills/woocommerce_ji76cm.png' alt='WooCommerce' />
        </div>
        {errors ? <div className="errors">{errors}</div> : null}
      </div >
    </div>
  )
}

export default Skills
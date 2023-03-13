import React from 'react'
import '../styles/About.css'
import LNelson_TechResume from '../media/LNelson_TechResume.pdf'

function About() {
  return (
    <div id='about'>
    <div className='about-section'>
      <h2 className='sub-heading'>About Me</h2>
      <p className='about'>My love for technology started when I was a little girl watching my dad build computers on a card table in our living room. I was always fascinated by the intricate design of motherboards, which to me looked like “little cities”. As I grew older, my curiosity about how things work blossomed and I started disassembling electronics to better understand them. Unfortunately, my mother wasn't too happy when I took apart our expensive vacuum cleaner, but at least I put it back together and it worked!</p>
      <p className='about'>This early foundation sparked my creativity and analytical skills. I have a passion for learning and expanding my skills, which has led me to explore the exciting world of design, software engineering, and full-stack development.</p>
      <p className='about'>As a freelancer, I have honed excellent self-motivation and organizational skills, along with the importance of being adaptable to changing project requirements and client needs. I approach each project with a positive attitude, a drive to deliver exceptional results, and a commitment to finding innovative solutions.</p>
      <p className='about'>Whether I'm designing a website, creating a marketing campaign, or building a software application, I bring my best to every task and strive for excellence in all that I do. I am eager to work with clients who share my love for creativity and innovation, and I am constantly seeking opportunities to grow and enhance my skillset.</p>
      <p className='about'>With a diverse background in graphic design, photography, web design, software engineering, and full-stack development, I can be a valuable asset to any team. I am excited to bring my passion and skills to new challenges and opportunities.</p>
      <a className='res-link' href={LNelson_TechResume} target="_blank" rel="noreferrer">Download My Resume</a>
    </div>
    </div>
  )
}

export default About

{/* <p className='about'>My love of technology began as a little girl watching my dad build computers on a card table in our living room. I was always fascinated with how motherboards looked like “little cites”. As I grew older, my curiosuty blossomed and I began disassembling electronics to understand how they worked, a hobby that my mother was not too fond of when I took apart our expensive vacuum cleaner. (Sorry Mom! At least I got it put back together again and in working order.)</p>
<p className='about'>This foundation shaped me into a creative and analytical individual. I have a passion for learning and expanding my skills, which has led me to explore the exciting world of design, software engineering, and full-stack development.</p>
<p className='about'>As a freelancer, I have developed excellent self-motivation and organizational skills, andthe importance of being adaptable to changing project requirements and client needs. I approach each project with a positive attitude, a drive to deliver exceptional results, and a commitment to finding innovative solutions.</p>
<p className='about'>Whether I'm designing a website, creating a marketing campaign, or building a software application, I bring my best to every task and strive for excellence in all that I do. I am eager to work with clients who share my love for creativity and innovation, and I am constantly seeking opportunities to grow and enhance my skillset.</p>
<p className='about'>My diverse background in graphic design, photography, web design, software engineering, and full-stack development make me a valuable asset to any team. I am eager to bring my passion and skills to new challenges and opportunities.</p> */}
{/* <p className='about'>Who needs a superhero when you have a paramedic turned graphic designer, photographer, web designer, software engineer, and full-stack developer? That's right, I'm a <em>jill</em> of all trades and ready to bring my unique blend of skills to the table. With a pulse on design and a heart full of coding love, I'm eager to save the day with my passion and expertise. Let's take on new challenges and create some awesomeness together!</p> */}
import React from 'react'
import "../Styles/Main.css"
import TypedText from './TypedText'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import About from './About';
import resume from "../Resume.pdf";
const Main = () => {
  return (
    <>
      <div className='section' id="about">
        <div className="left-section">
          <div className="left-content">
            <div className="name">Hi I'm <br /> Sayyad Mukthum sa
              <br /><span className="text"><TypedText /></span>
            </div>
            <a href={resume} download="Resume">
            <button className='button'>Download CV</button>
            </a>
          </div>
        </div>
        <div className="right-section">
          <div className="right-sec">
            <div className="right-content">
              <label id="about-me">About Me</label>
              <div className="r-content">
                <About />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <Skills />
      </div>
      <div className="projects" >
        <Projects />
      </div>
      <div className="contact" >
        <Contact />
      </div>
    </>
  )
}

export default Main

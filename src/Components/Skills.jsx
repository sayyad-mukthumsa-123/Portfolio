import React from 'react'
import Skillbar from './Skillbar'
import "../Styles/Skills.css"
const Skills = () => {
  return (
    <>
      <div className="skills-text" id="skills">
        Skills
      </div>
      <div className="skills-sec">
        <div className='skills-parts'>
          <Skillbar name="C" per="80%" />
          <Skillbar name="PYTHON" per="80%" />
          <Skillbar name="JAVA" per="80%" />
          <Skillbar name="HTML" per="80%" />
          <Skillbar name="CSS" per="70%" />
          <Skillbar name="JAVASCRIPT" per="60%" />
          <Skillbar name="REACT" per="70%" />
          <Skillbar name="EXPRESS JS" per="70%" />
          <Skillbar name="NODE JS" per="70%" />
          <Skillbar name="MONGODB" per="70%" />
          <Skillbar name="GIT & GITHUB" per="70%" />
        </div>
      </div>
    </>
  )
}

export default Skills

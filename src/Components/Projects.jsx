import React from 'react';
import Card from './Card';
import '../Styles/Projects.css';
import DevManiaimg from "../DevMania.png";
import ChatAppimg from "../ChatApp.png";
import WorkoutGuruimg from "../WorkoutGuru.png"

const Projects = () => {
  return (
    <div id="projects" className='projects-sec'>
      <div className="projects-text">Projects</div>
      <div className="projects-parts">
        <div className="pro-con">
          <div className="card-container">
            <Card im={DevManiaimg} name={'DevMania'}/>
            <Card im={ChatAppimg}  name={'ChatApp'}/>
            <Card im={WorkoutGuruimg}  name={'WorkoutGuru'}/>
            {/* Currently no projects */}
          </div>
          <p>If you want demo links of projects download cv above</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;

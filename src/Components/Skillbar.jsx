import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Skillbar.css';

const Skillbar = ({ name, per }) => {
  const skillBarRef = useRef(null);

  useEffect(() => {
    if (skillBarRef.current) {
      skillBarRef.current.style.setProperty('--percentage', `${per}`);
    }
  }, [per]);



  
  return (
    <>
      <div className="skill-title">
        <div className="skill-name">{name}</div>
        <div className="skill-per">{per}</div>
      </div>
      <div className="skill-bar" ref={skillBarRef}></div>
    </>
  );
};

export default Skillbar;

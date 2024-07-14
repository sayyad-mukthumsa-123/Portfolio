import React, { useState } from 'react';
import Home from './Home';
import "../Styles/MainPage.css";
function ToggleSwitch() {
  const [showContent, setShowContent] = useState(false);
  const [showSwitch, setShowSwitch] = useState(true);

  const toggleSwitch = () => {
    setShowContent(!showContent);
    setShowSwitch(false);
  };

  return (
    <div className='main-page'>
      {showSwitch && (
        <div className='mp-content'>
          <div className="mp-text">Please turn on the lights !!!</div>
          <div className="mp-button">
            <button id='bt' onClick={toggleSwitch} >
              {/* <div className='bt-text'>TURN ON</div> */}
              TURN ON
            </button>
          </div>
        </div>

      )}

      {showContent &&
        <div className="content"><Home /></div>
      }
    </div>

  );
}

export default ToggleSwitch;

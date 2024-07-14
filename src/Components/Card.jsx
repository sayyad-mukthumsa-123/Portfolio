import React from 'react';
import '../Styles/Card.css';

const Card = ({ im, name }) => {
  const divStyle = {
    minHeight: '200px',
    backgroundImage: `url(${im})`,
    backgroundSize: 'contain',
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center',
    };

  return (
    <div>
      <div className="card">
        <div className="card-body" style={divStyle}></div>
        <div className="card-footer">{name}</div>
      </div>
    </div>
  );
};

export default Card;

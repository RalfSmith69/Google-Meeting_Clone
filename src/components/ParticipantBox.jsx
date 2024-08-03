import React from 'react';
import './ParticipantBox.css';

const ParticipantBox = ({ name, initial, color }) => {
  return (

    <div className="participant-box">
      <div className="participant-initial" style={{ backgroundColor: color }}>
        {initial}
      </div>
      <div className="participant-name">{name}</div>
    </div>
    
  );
};

export default ParticipantBox;
import React from 'react';
import ParticipantBox from './ParticipantBox';
import './ParticipantsGrid.css';

const participants = [
  { name: 'Manuel Fahrenholz', initial: 'M', color: '#FF5733' },
  { name: 'K Gnd', initial: 'K', color: '#33FF57' },
  { name: 'Paul Schilling', initial: 'P', color: '#3357FF' },
  { name: 'Philipp Sauerlaender', initial: 'P', color: '#FF33A8' },
  { name: 'Ralf Schmitz', initial: 'R', color: '#FF8C33' },
  { name: 'Julijana Uneva', initial: 'J', color: '#8C33FF' },
  { name: 'Kevin Thomas Lampe', initial: 'K', color: '#33FFC4' },
  { name: 'Oscar van Velsen', initial: 'O', color: '#FF3333' },
];

const ParticipantsGrid = () => {
  return (
    <div className="participants-grid">
      {participants.map((participant, index) => (
        <ParticipantBox
          key={index}
          name={participant.name}
          initial={participant.initial}
          color={participant.color}
        />
      ))}
    </div>

  );
};

export default ParticipantsGrid;
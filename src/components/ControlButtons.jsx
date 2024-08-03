import React from 'react';
import './ControlButtons.css';

const ControlButtons = ({ type }) => {
  const mainButtons = (
    <>
      <button className="control-button red"><i className="fas fa-microphone"></i></button>
      <button className="control-button red"><i className="fas fa-video"></i></button>
      <button className="control-button"><i className="fas fa-closed-captioning"></i></button>
      <button className="control-button"><i className="far fa-smile"></i></button>
      <button className="control-button"><i className="fas fa-ellipsis-h"></i></button>
      <button className="control-button"><i className="fas fa-arrow-up"></i></button>
      <button className="control-button"><i className="far fa-hand-paper"></i></button>
      <button className="control-button red"><i className="fas fa-phone"></i></button>
    </>
  );

  const secondaryButtons = (
    <>
      <button className="control-button"><i className="fas fa-info-circle"></i></button>
      <button className="control-button"><i className="fas fa-user-friends"></i></button>
      <button className="control-button"><i className="fas fa-comments"></i></button>
      <button className="control-button"><i className="fas fa-tasks"></i></button>
      <button className="control-button"><i className="fas fa-lock"></i></button>
    </>
  );

  return (
    <div className={`control-buttons ${type}`}>
      {type === 'main' ? mainButtons : secondaryButtons}
    </div>
  );
};

export default ControlButtons;
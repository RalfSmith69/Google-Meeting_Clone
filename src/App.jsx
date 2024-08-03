import React from 'react';
import ParticipantsGrid from './components/ParticipantsGrid';
import ControlButtons from './components/ControlButtons';
import Clock from './components/Clock';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="content">
        <ParticipantsGrid />
        <ControlButtons type="main" />
        <ControlButtons type="secondary" />
        <Clock />
      </div>
    </div>
  );
};

export default App;
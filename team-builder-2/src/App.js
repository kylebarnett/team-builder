import React, { useState } from 'react';
import './App.css';
import team from './data';
import TeamList from './components/TeamList';
import InputForm from './components/Form';

function App() {

  const [teamMembers, setTeamMembers] = useState(team)

  return (
    <div className="App">
      <TeamList teamMembers={teamMembers} />
      <InputForm />
    </div>
  );
}

export default App;

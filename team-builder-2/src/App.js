import React, { useState } from 'react';
import './App.css';
import team from './data';
import TeamList from './components/TeamList';
import InputForm from './components/Form';

function App() {

  const [teamMembers, setTeamMembers] = useState(team)

  const addUser = person => {
    setTeamMembers([...teamMembers, person])
  }

  return (
    <div className="App">
      <InputForm addUser={addUser} />
      <TeamList teamMembers={teamMembers} />
    </div>
  );
}

export default App;

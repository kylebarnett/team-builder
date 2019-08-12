import React from 'react';

export default function TeamMember({ member }) {
  const { name, hobbies, location } = member
  return (
    <div>
      <h1>Name: {member.name}</h1>
      <ul>
        <h2>Hobbies: </h2>
        <li>{member.hobbies.map(hobby => (
          <p key={hobby}>{hobby}</p>
        ))}</li>
      </ul>
      <h3>Location: {member.location}</h3>
    </div>
  )
}
import React from 'react';
import '../App.css'

export default function TeamMember({ member }) {
  const { name, hobbies, location } = member
  console.log("hello", hobbies)
  return (
    <div className="member-container">
      <h1>Name: {name}</h1>
      <ul>
        <h2>Hobbies: </h2>
        <li>{hobbies.map((hobby, index) => (
          <p key={index}>{hobby}</p>
        ))}</li>
      </ul>
      <h3>Location: {location}</h3>
    </div>
  )
}
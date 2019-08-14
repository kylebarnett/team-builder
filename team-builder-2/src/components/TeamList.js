import React from 'react';
import TeamMember from './TeamMember';

export default function TeamList({ teamMembers }) {
  const { name, hobbies, location } = teamMembers
  return (
    <div className="example">
      {teamMembers.map(member => (
        <TeamMember member={member} key={member.name} />
      ))}
    </div>
  )
}
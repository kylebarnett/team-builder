import React from 'react';
import TeamMember from './TeamMember';

export default function TeamList({ teamMembers }) {
  const { name, hobbies, location } = teamMembers
  return (
    <div>
      {teamMembers.map(member => (
        <TeamMember member={member} key={member.name} />
      ))}
    </div>
  )
}
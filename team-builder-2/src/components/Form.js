import React, { useState } from 'react';

export default function InputForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: ""
  })

  const handleChange = event => {
    const updatedUser = { ...user, [event.target.name]: event.target.value };
    console.log(
      event.target.name,
      event.target.value,
      updatedUser
    )
    setUser(updatedUser)
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log("user state", user)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name..."
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email..."
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="role"
        placeholder="Role..."
        value={user.role}
        onChange={handleChange}
      />
    </form>
  )
}
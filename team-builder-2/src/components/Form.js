import React, { useState } from 'react';
import team from '../data';

export default function InputForm(props) {
  const [user, setUser] = useState({
    name: "",
    hobbies: [],
    location: ""
  })

  const [hobby, setHobbies] = useState("")

  const handleChange = event => {
    if (event.target.name === "hobbies") {

      setHobbies(event.target.value)
    } else {
      setUser({ ...user, [event.target.name]: event.target.value })
      console.log(event.target.value)
    }
  }

  const handleSubmit = event => {
    event.preventDefault();
    let newHobbies = [...user.hobbies]

    newHobbies.push(hobby)
    const newUser = {
      ...user,
      hobbies: newHobbies
    }
    console.log('newUser', newUser)
    props.addUser(newUser)
    console.log("user state", user)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="hobbies"
          placeholder="Hobbies..."
          value={hobby}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location..."
          value={user.location}
          onChange={handleChange}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  )
}
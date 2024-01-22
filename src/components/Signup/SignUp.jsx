import Header from "../../components/Header/Header"
import { Link } from 'react-router-dom'
import { UseRegister } from "../../hooks/api"
import { useState } from "react"
import './SignUp.css';
const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [biography, setBiography] = useState('')
  const [birthdate, setBirthdate] = useState('')
  const [lastName, setLastName] = useState('')
  
  const handleForm = async (event) => {
    event.preventDefault()
    const res = await UseRegister()
  }

  return (
    <div className="fields_container signup_fields_container">
      <h3>Register:</h3>
      <form onSubmit={handleForm}>
        <input
          className="input_field"
          name="username"
          placeholder="Username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="input_field"
          name="email"
          placeholder="Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        /> <input
          className="input_field"
          name="name"
          placeholder="Name"
          type="name"
          value={name}
          onChange={e => setName(e.target.value)}
        /> <input
          className="input_field"
          name="lastname"
          placeholder="Last name"
          type="name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <input
          className="input_field"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          className="input_field"
          name="birthdate"
          placeholder="Birthdate"
          type="birthdate"
          value={birthdate}
          onChange={e => setBirthdate(e.target.value)}
        />
        <input
          className="input_field"
          name="biography"
          placeholder="Biography"
          type="text"
          value={biography}
          onChange={e => setBiography(e.target.value)}
        />
        <button className="login_register_button">Sign Up</button>
      </form>
      </div>
  )
}

export default SignUp
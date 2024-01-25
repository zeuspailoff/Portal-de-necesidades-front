import Header from "../../components/Header/Header"
import { Navigate } from 'react-router-dom'
import { useUserActions } from "../../hooks/api"
import { useState } from "react"
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('kevin')
  const [lastname, setLastName] = useState('ghio-traver')
  const [username, setUsername] = useState('keviinmiichael')
  const [email, setEmail] = useState('ghiokevin@gmail.com')
  const [biography, setBiography] = useState('jdsajdasaj ajkls dajkds')
  const [birthdate, setBirthdate] = useState('1993-01-01')
  const [password, setPassword] = useState('Asd123,.')
  const [phone, setPhone] = useState('654789123')
  const {register} = useUserActions();
  const [error, setError] = useState()

  const handleForm = async (e) => {
    e.preventDefault()
    const body = {
      username,
      password,
      email,
      name,
      biography,
      phone,
      birthdate,
      lastname
    }
    const newUser = await register(body)
    console.log(newUser);
    if (newUser.status === 200) return <Navigate to="/" />
    setError(newUser)
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
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        /> <input
          className="input_field"
          name="lastname"
          placeholder="Last name"
          type="text"
          value={lastname}
          onChange={e => setLastName(e.target.value)}
        />
        <input
          className="input_field"
          name="password"
          placeholder="Password"
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          className="input_field"
          name="birthdate"
          placeholder="Birthdate"
          type="date"
          value={birthdate}
          onChange={e => setBirthdate(e.target.value)}
        />
         <input
          className="input_field"
          name="phone"
          placeholder="phone"
          type="number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <textarea
          className="input_field"
          name="biography"
          placeholder="Biography"
          type="text"
          value={biography}
          onChange={e => setBiography(e.target.value)}
        />
        <button className="login_register_button">Sign Up</button>
        {error ? <p>{error.error.message}</p> : null}
      </form>

      <h4>Already have an account? <a href="/">Login</a></h4>
      </div>
  )

  }
export default SignUp;
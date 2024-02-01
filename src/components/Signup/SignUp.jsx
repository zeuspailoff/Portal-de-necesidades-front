import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useUserActions } from "../../hooks/api"
import { useState } from "react"
import { useUser } from "../../UserContext"
import './SignUp.css';

const SignUp = () => {
  const [url] = useState(window.location.origin)
  const [name, setName] = useState('kevin')
  const [lastname, setLastName] = useState('ghio-traver')
  const [username, setUsername] = useState('keviinmiichael')
  const [email, setEmail] = useState('ghiokevin@gmail.com')
  const [biography, setBiography] = useState('jdsajdasaj ajkls dajkds')
  const [birthdate, setBirthdate] = useState('1993-01-01')
  const [password, setPassword] = useState('Asd123,.')
  const [phone, setPhone] = useState('654789123')
  const { register } = useUserActions();
  const navigate = useNavigate()
  const [user] = useUser()
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);
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
      lastname,
      url
    }
    const newUser = await register(body)
    if (newUser.status === 200) {
      setSuccess(true)
      setName('')
      setLastName('')
      setUsername('')
      setEmail('')
      setBiography('')
      setBirthdate('')
      setPassword('')
      setPhone('')
      navigate('/')
    } else {
      setSuccess(false)
      setError(newUser)
    }
  }

  if (user) return <Navigate to="/" />

  return (
    <div className="fields_container signup_fields_container">
      {success && <div className="succes"> Revisa tu correo para activar tu usuario </div>}
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
        {error && <p>{error.error.message}</p>}
      </form>

      <h4>Already have an account? <Link to="/login">Login</Link></h4>
    </div>
  )

}
export default SignUp;
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useUserActions } from "../../hooks/api"
import { useState } from "react"
import { useUser } from "../../UserContext"
import './SignUp.css';

const SignUp = () => {
  const [url] = useState(window.location.origin)
  const [name, setName] = useState()
  const [lastname, setLastName] = useState()
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [biography, setBiography] = useState()
  const [birthdate, setBirthdate] = useState()
  const [password, setPassword] = useState()
  const [phone, setPhone] = useState()
  const { register } = useUserActions();
  const navigate = useNavigate()
  const [user] = useUser()
  const [error, setError] = useState(false);
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
    const { data } = await register(body)
    if (data.status === 200) {
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
      setError(data.error.message)
    }
  }
  if (user) return <Navigate to="/" />
  return (
    <div className='wrapper_transparent'>
      <div className="fields_container signup_fields_container">
        {success && <div className="succes"> Revisa tu correo para activar tu usuario </div>}
        <h3>Register:</h3>
        <form onSubmit={handleForm} className='register_form'>
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
            type="password"
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
          <button className="login_register_button button">Sign Up</button>
          {error ? <p>{error}</p> : null}
        </form>
        <h4>Already have an account? <Link to="/login">Login</Link></h4>
      </div>
    </div>
  )
}
export default SignUp;
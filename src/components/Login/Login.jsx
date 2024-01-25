/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import { useUser } from "../../UserContext"
import { Link, Navigate } from 'react-router-dom'
import { useUserActions } from "../../hooks/api"
import './Login.css'
const Login = () => {
  const {login} = useUserActions();
  const [email, setEmail] = useState('ghiokevin@gmail.com')
  const [password, setPassword] = useState('Asd123,.')
  const [user, setUser] = useUser()
  const [error, setError] = useState()



  const handleForm = async (e) => {
    e.preventDefault()
    const body = { email, password }
    const loggedUser = await login(body)
    console.log(loggedUser);
    if (loggedUser.status == "OK"){
      setUser(loggedUser.data.data)
      console.log(user);
       return <Navigate to="/" />
    }
      setError(loggedUser)
    }
  

  if (user) return <Navigate to="/" />
  

  return (
    <div className="fields_container login_fields_container">
      <h3>Login:</h3>
      <form onSubmit={handleForm}>
        <input
          className="input_field"
          name="email"
          placeholder="Email"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="input_field"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="login_register_button">Login</button>
        {error?.error ?  <p className="error">Se ha producido un error: {error.error.message}</p> : null}
      </form>
      <h3>You don't have an account yet? <Link to='/register'>Register now</Link></h3>
      </div>
  )
}

export default Login;
/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import { useUser } from "../../UserContext"
import { Link, Navigate } from 'react-router-dom'
import { useUserActions } from "../../hooks/api"
import './Login.css'

const Login = () => {
  const { login } = useUserActions();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useUser()
  const [error, setError] = useState()

  const handleForm = async (e) => {
    e.preventDefault();
    const body = { email, password };
    try {
      const loggedUser = await login(body);

      if (loggedUser.data.status === "OK") {
        setUser(loggedUser.data.data.data.user);
      } else {
        setError(loggedUser);
        console.error('Error during login:', loggedUser.data.error.message);
      }
    } catch (error) {
      setError({ error: { message: 'An error occurred during login.' } });
    }
  };

  if (user) return <Navigate to="/" />


  return (
    <div className="fields_container login_fields_container">
      <h3>Login:</h3>
      <form onSubmit={handleForm} className="login_form">
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
        <button className="login_register_button button">Login</button>
        {error?.error ? <p className="error">Se ha producido un error: {error.data.error.message}</p> : null}
      </form>
      <p className="link-p">You don't have an account yet? <Link to='/register'>Register now</Link></p>
      <p className="link-p">Do you forget your password? <Link to='/reset-password'>Reset password</Link></p>

    </div>
  )
}

export default Login;
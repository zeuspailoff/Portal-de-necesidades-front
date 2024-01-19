/* eslint-disable react/no-unescaped-entities */
import { useState } from "react"
import Header from "../../components/Header/Header"
import { useUser } from "../../UserContext"
import { Link, Navigate } from "react-router-dom"
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useUser()
  const [error, setError] = useState()


  const handleForm = async (event) => {
    event.preventDefault()
    const res = await fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const response = await res.json()

    if (res.ok) {
      setUser(response)
    } else {
      setError(response)
    }
  }

  //if (user) return <Navigate to="/" />

  return (
    <div>
      <Header />
      <h1>We're happy to see you again!</h1>
      <h3>Login:</h3>
      <form onSubmit={handleForm}>
        <input
          name="email"
          placeholder="email"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Login</button>
        {error?.error &&
          <p className="error">Se ha producido un error: {error.error}</p>
        }
        <p>Don't have an account?
          <Link to="/signup">Register</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
import Header from "../../components/Header/Header"
import { Link } from 'react-router-dom'
const Login = () => {
    const handleForm = (event) => {
      event.preventDefault()
    }
    return (
        <div>
          <Header/>
            <h1>We're happy to see you again!</h1>
            <h3>Login:</h3>
            <form onSubmit={handleForm}>
                <input
                name="username"
                placeholder="Username"
                type="text"
                />
                <input
                name="password"
                placeholder="Password"
                type="password"
                />
                <button>Login</button>
                <p>Don't have an account?
                    <Link to="/signup">Register</Link>
                </p>
            </form>
      </div>
    )
  }
  
  export default Login
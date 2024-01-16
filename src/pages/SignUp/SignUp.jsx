import Header from "../../components/Header/Header"
import { Link } from 'react-router-dom'
const SignUp = () => {
    const handleForm = (event) => {
      event.preventDefault()
    }
    return (
        <div>
          <Header/>
            <h1>Welcome to the family I need ⬆️</h1>
            <h3>Register:</h3>
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
                <input
                name="password"
                placeholder="Repeat yor password"
                type="password"
                />
                <button>Sign Up</button>
                <p>Already have an account?
                    <Link to="/login">Login</Link>
                </p>
            </form>
      </div>
    )
  }
  
  export default SignUp
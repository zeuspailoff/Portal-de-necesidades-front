import { Link } from 'react-router-dom'
const SignUp = () => {
    const handleForm = (event) => {
      event.preventDefault()
    }
    return (
        <div className='signup'>
            <h1>Welcome to the family I need ⬆️</h1>
            <h2>Register:</h2>
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
            </form>
      </div>
    )
  }
  
  export default SignUp
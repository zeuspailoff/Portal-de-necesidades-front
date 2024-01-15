import Header from "../../components/Header/Header"
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
            </form>
      </div>
    )
  }
  
  export default Login
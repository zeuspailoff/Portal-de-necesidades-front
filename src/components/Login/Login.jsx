const Login = () => {
    const handleForm = (event) => {
      event.preventDefault()
    }
    return (
        <div className="login">
            <h1>We're happy to see you again!</h1>
            <h2>Login:</h2>
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
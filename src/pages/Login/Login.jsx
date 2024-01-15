import Header from "../../components/Header/Header"
const Login = () => {
    const handleForm = (event) => {
      event.preventDefault()
    }
    return (
        <div>
          <Header/>
            <h1>Nos alegramos de verte de nuevo</h1>
            <h3>Inicia sesión:</h3>
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
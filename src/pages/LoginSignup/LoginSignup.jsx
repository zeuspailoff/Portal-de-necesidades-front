import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";
import './LoginSignup.css'

const LoginSignup = () =>{
     return(
        <div>
            <Header/>
            <Login/>
            <SignUp/>
            <Footer/>
        </div>
     )
}

export default LoginSignup
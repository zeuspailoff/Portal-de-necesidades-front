import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";
import SignUp from "../../components/Signup/SignUp";
import './LoginSignup.css';

const LoginSignup = () => {
    return (
        <div>
            <Header/>
            <div className="login_register_container">
                <Login />
                <SignUp />
            </div>
        </div>
    );
}

export default LoginSignup;
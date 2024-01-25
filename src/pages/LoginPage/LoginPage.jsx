import Header from "../../components/Header/Header";
import Login from "../../components/Login/Login";
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div>
            <Header/>
            <div className="login_register_container">
                <Login />
            </div>
        </div>
    );
}

export default LoginPage;
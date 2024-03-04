import { useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { useUserActions } from "../../hooks/api"
import './NewPassword.css'


const NewPassword = () => {
    const [password, setPassword] = useState()
    const [password_repeat, setPasswordRepeat] = useState()
    const { newPassword } = useUserActions()
    const { recoveryCode } = useParams()

    const [error, setError] = useState(false);
    const navigate = useNavigate();


    const handlePassword = async (e) => {
        e.preventDefault();
        const body = {
            password: password,
        }
        const response = await newPassword(body, recoveryCode)
        if (password != password_repeat) {
            setError(true);
        }

        if (!error && response.status == 200) {
            navigate('/login')
        }

    }

    return (
        <div className='general-container'>
            <div style={{ width: "250px" }}>
                {error && <p className="error_password">Your passwords doesn't match</p>}
                <form onSubmit={handlePassword} className="newpass_container">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="password_repeat">Repeat Password</label>
                    <input type="password" name="password_repeat" onChange={(e) => setPasswordRepeat(e.target.value)} />
                    <button type="submit" className="update_pass">Update Password</button>
                </form>
            </div>
        </div>
    )
}

export default NewPassword;
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
        <>
            <div>
                {error && <p>Your passwords doesn't match</p>}
                <form onSubmit={handlePassword}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="password_repeat">Repeat Password</label>
                    <input type="password" name="password_repeat" onChange={(e) => setPasswordRepeat(e.target.value)} />
                    <button type="submit">Update Password</button>
                </form>
            </div>
        </>
    )
}

export default NewPassword;
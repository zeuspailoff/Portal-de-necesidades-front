/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useUser } from "../../UserContext";
import { useUserActions } from "../../hooks/api";
import { useNavigate } from "react-router-dom";

const EditUser = () => {
    const [user] = useUser('');
    const [userName, setUsername] = useState('');
    const [lastname, setLastname] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [password_repeat, setPasswordRepeat] = useState('');
    const [biography, setBiography] = useState('');
    const [file, setFile] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate('');

    const id = user.data.data.user.id;
    const { dataUser } = useUserActions()

    const handleEdit = (e) => {
        e.preventDefault();
        const body = {
            username: userName,
            lastname: lastname,
            name: name,
            phone: phone,
            password: password,
            biography: biography,
            files: file
        }
        const editedUser = dataUser(id, body)

        if (password !== password_repeat) {
            setError(true)
        }

        if (editedUser.status == 200) {
            window.location.reload();
            setPhone('')
            setFile('')
            setBiography('')
            setLastname('')
            setName('')
            setPassword('')
            setPasswordRepeat('')
            setUsername('')
            navigate('/profile')
        }
    }
    return (
        <>

            {error && <p>Your passwords doesn't match</p>}
            <form onSubmit={handleEdit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" value={userName}
                    onChange={e => setUsername(e.target.value)} />

                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname" placeholder="Lastname" value={lastname} onChange={e => setLastname(e.target.value)} />

                <label htmlFor="phone">Phone</label>
                <input type="phone" name="phone" placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

                <label htmlFor="password_repeat">Password repeat</label>
                <input type="password" name="password_repeat" placeholder="Repite tu contraseña " value={password_repeat} onChange={e => setPasswordRepeat(e.target.value)} />

                <label htmlFor="biography">Biography</label>
                <textarea
                    className="input_field"
                    name="biography"
                    placeholder="Biography"
                    type="text"
                    value={biography} onChange={e => setBiography(e.target.value)}

                />

                <label htmlFor="photo">Photo</label>
                <input type="file" name="photo" placeholder="photo" value={file} onChange={e => setFile(e.target.value)} />

                <button type="submit">Send Change</button>


            </form>
        </>
    )
}
export default EditUser;
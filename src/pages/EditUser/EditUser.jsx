/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useUser } from "../../UserContext";
import { useUserActions } from "../../hooks/api";
import { useNavigate } from "react-router-dom";
import './EditUser.css'

const EditUser = () => {
    const [user] = useUser('');
    const [loggedUser, setLoggedUser] = useState(user.data.data.user);
    const [userName, setUsername] = useState(loggedUser.username);
    const [lastname, setLastname] = useState(loggedUser.lastname);
    const [name, setName] = useState(loggedUser.name);
    const [biography, setBiography] = useState(loggedUser.biography);
    const [file, setFile] = useState('');
    const navigate = useNavigate('');

    const id = user.data.data.user.id;
    const { dataUser } = useUserActions()

    const handleEdit = (e) => {
        e.preventDefault();
        const body = {
            username: userName,
            lastname: lastname,
            name: name,
            biography: biography,
            files: file
        }
        const editedUser = dataUser(id, body)

        if (editedUser.status == 200) {
            window.location.reload();
            setFile('')
            setBiography('')
            setLastname('')
            setName('')
            setUsername('')
            navigate('/profile')
        }
    }
    return (
        <>
            <form onSubmit={handleEdit} className="editUser_container">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" value={userName}
                    onChange={e => setUsername(e.target.value)} />

                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname" placeholder="Lastname" value={lastname} onChange={e => setLastname(e.target.value)} />


                <label htmlFor="biography">Biography</label>
                <textarea
                    className="input_field"
                    name="biography"
                    placeholder="Biography"
                    type="text"
                    value={biography} onChange={e => setBiography(e.target.value)}

                />

                <label htmlFor="photo">Photo</label>
                <input type="file" name="files" placeholder="files" value={file} onChange={e => setFile(e.target.value)} />

                <button type="submit" className="editUser_button">Send Change</button>


            </form>
        </>
    )
}
export default EditUser;
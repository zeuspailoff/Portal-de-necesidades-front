/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useUser } from "../../UserContext";
import { useUserActions } from "../../hooks/api";
import { useNavigate } from "react-router-dom";
import './EditUser.css'

const EditUser = () => {
    const [user,setUser] = useUser('');
    const [userName, setUsername] = useState(user.username);
    const [lastname, setLastname] = useState(user.lastname);
    const [name, setName] = useState(user.name);
    const [biography, setBiography] = useState(user.biography);
    const [files, setFiles] = useState([]);
    const navigate = useNavigate('');

    const id = user.id;
    const { dataUser } = useUserActions()

    const handleEdit = async (e) => {
        e.preventDefault();

        const fd = new FormData()

        fd.append('username', userName)
        fd.append('lastname', lastname)
        fd.append('name', name)
        fd.append('biography', biography)
        if (files.length > 0) {
            console.log("ASA", files);
            files.forEach(f => {
                fd.append('files', f)
            })
        }

        const response = await dataUser(id, fd)
        const editedUser = {...response.data};

        if (editedUser.status === 200) {
            console.log("edited user", editedUser.data);
            const newUser = { ...user }
            newUser.username = editedUser.data.username;
            newUser.lastname = editedUser.data.lastname;
            newUser.name = editedUser.data.name;
            newUser.biography = editedUser.data.biography;
            newUser.profile_picture = editedUser.data.profile_picture;
            setUser(newUser);
            navigate('/profile')
        }
    }
    return (
        <>
            <form onSubmit={handleEdit} className="editUser_container">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" value={userName || " "}
                    onChange={e => setUsername(e.target.value)} />

                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" value={name || " "} onChange={e => setName(e.target.value)} />

                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname" placeholder="Lastname" value={lastname || " "} onChange={e => setLastname(e.target.value)} />


                <label htmlFor="biography">Biography</label>
                <textarea
                    className="input_field"
                    name="biography"
                    placeholder="Biography"
                    type="text"
                    value={biography || " "} onChange={e => setBiography(e.target.value)}

                />

                <label htmlFor="photo">Photo</label>
                <input className="input_files" type="file" name="files[]" placeholder="files" onChange={e => setFiles(Array.from(e.target.files))} multiple={true} />

                <button type="submit" className="editUser_button">Send Change</button>


            </form>
        </>
    )
}
export default EditUser;
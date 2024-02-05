

const EditUser = () => {

    return (
        <>

            <form>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" />

                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Name" />

                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname" placeholder="Lastname" />

                <label htmlFor="phone">Phone</label>
                <input type="phone" name="phone" placeholder="Phone" />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" />

                <label htmlFor="password_repeat">Password repeat</label>
                <input type="password" name="password_repeat" placeholder="Repite tu contraseña " />

                <label htmlFor="biography">Biography</label>
                <textarea
                    className="input_field"
                    name="biography"
                    placeholder="Biography"
                    type="text"

                />

                <label htmlFor="photo">Photo</label>
                <input type="file" name="photo" placeholder="photo" />

                <button type="submit">Send Change</button>


            </form>
        </>
    )
}
export default EditUser;
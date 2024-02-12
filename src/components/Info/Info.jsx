import UsersList from '../UsersList/UsersList'
import './Info.css'
const Info = () => {

    return (
        <div className='flex_container'>
            <div className='flex_container_child'>
                <h3>Website Features</h3>
                <ul>
                    <li>Add User Search by Name</li>
                    <li>Add Messaging Chat</li>
                    <li>Add Contact Requests</li>
                    <li>Add Color Customization</li>
                    <li>Add Different Languages</li>
                </ul>
            </div>
            <div className='flex_container_child'>
                <aside className='aside_users'>
                    <h3>Featured users of the week:</h3>
                    <UsersList />
                </aside>
            </div>
        </div>
    )
}

export default Info
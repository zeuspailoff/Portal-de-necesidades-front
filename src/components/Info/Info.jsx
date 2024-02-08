import UsersList from '../UsersList/UsersList'
import './Info.css'
const Info = () =>{

    return(
        <div className='flex_container'>
            <div className='flex_container_child'>
                <h3>Platform information and updates:</h3>
            </div>
            <div className='flex_container_child'>
                <aside className='aside_users'>
                    <h3>Featured users of the week:</h3>
                    <UsersList/>
                </aside>
            </div>
        </div>
    )
}

export default Info
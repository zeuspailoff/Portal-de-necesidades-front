import './Info.css'
const Info = () =>{

    return(
        <div className='flex_container'>
            <div className='flex_container_child'>
                <h3>Platform information and updates:</h3>
            </div>
            <div className='flex_container_child'>
                <aside className='asideUsers'>
                    <h3>Featured users of the week:</h3>
                    <ul>
                        <li>User 1</li>
                        <li>User 2</li>
                        <li>User 3</li>
                    </ul>
                </aside>
            </div>
        </div>
    )
}

export default Info
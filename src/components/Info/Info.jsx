import './Info.css'
const Info = () =>{

    return(
        <div>
            <aside>Información y novedades de la plataforma</aside>
            <aside className='asideUsers'>
                <p>Usuarios destacados de la semana:</p>
                <ul>
                    <li>User 1</li>
                    <li>User 2</li>
                    <li>User 3</li>
                </ul>
            </aside>
        </div>
    )
}

export default Info
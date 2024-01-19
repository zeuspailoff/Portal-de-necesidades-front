import './ProfilePreviewCard.css';
import { Link } from 'react-router-dom';
import { useUser } from '../../UserContext';

const ProfilePreviewCard = () => {
    const [user, setUser] = useUser()


    return (
        <div>
            {!user && <Link to="/login">Iniciar sesión</Link>}
            {user &&
                <span>
                    {user?.data.data.username}
                    <span onClick={() => setUser()}>📴</span>
                </span>
            }
            <div className='round_picture_preview' ></div>
            <h3>{user ? <Link to='/profile'>{`Hi, ${user.data?.data?.username}`}</Link> : 'Login / Sign Up'}</h3>
        </div>
    );
}

export default ProfilePreviewCard;
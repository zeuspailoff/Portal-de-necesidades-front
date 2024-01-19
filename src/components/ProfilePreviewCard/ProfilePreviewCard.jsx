import './ProfilePreviewCard.css';
import { Link } from 'react-router-dom';
import { useUser } from '../../UserContext';

const ProfilePreviewCard = () => {
    const [user, setUser] = useUser()

    return (
        <div className={`profile_preview_card ${user ? 'logged-in' : 'not-logged-in'}`}>
            {!user && <Link to="/login">Iniciar sesión</Link>}
            {user &&
                <span>
                    {user.data.username}
                    <span onClick={() => setUser()}>⏻</span>
                </span>
            }
            <div className='round_picture_preview' style={user ? { backgroundImage: `url(${user})` } : null}></div>
            <h3>{user ? <Link to='/profile'>{`Hi, ${user.data.t}`}</Link> : 'Login / Sign Up'}</h3>
        </div>
    );
}

export default ProfilePreviewCard;

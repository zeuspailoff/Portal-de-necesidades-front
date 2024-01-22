import './ProfilePreviewCard.css';
import { Link } from 'react-router-dom';
import { useUser } from '../../UserContext';

const ProfilePreviewCard = () => {
    const [user, setUser] = useUser();

    return (
        <div className='profile_preview_card'>
                <div className='round_picture_preview'
                style={
                    { backgroundImage: user ? `url(${user.data?.data?.user.avatar})` : 'none', backgroundColor: user ? 'transparent' : 'grey' }
                }>
                </div>
            {!user && <Link to="/login-signup">Login/Signup</Link>}
            {user && (
                <span>
                    {user ? <Link to='/profile'>{`Hi, ${user.data?.data?.user.username}`}</Link> : 'Login / Sign Up'}
                    <span onClick={() => setUser()}>🚫</span>
                </span>
            )}
        </div>
    );
}

export default ProfilePreviewCard;

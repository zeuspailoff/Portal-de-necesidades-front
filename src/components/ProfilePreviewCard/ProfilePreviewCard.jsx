import './ProfilePreviewCard.css';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../UserContext';

const ProfilePreviewCard = () => {
  const [user, setUser] = useUser();
  const userData = user || {};
  const navigate = useNavigate();
  console.log(userData);

  const logout = () => {
    setUser();
    navigate('/');
  }

  return (
    <div className='profile_preview_card'>
      <div
        className='round_picture_preview'
        style={{
          backgroundImage: userData.profile_picture ? `http://localhost:8080/${user.profile_picture})` : 'none',
          backgroundColor: userData.profile_picture ? 'transparent' : 'grey'
        }}
      ></div>
      {!user && <Link className='profile_link' to="/login">Login/Signup</Link>}
      {user && (
        <span>
          <Link className='profile_link' to='/profile'>{`Hi, ${userData.username}`}</Link>
          <span onClick={logout}>🚫</span>
        </span>
      )}
    </div>
  );
}

export default ProfilePreviewCard;

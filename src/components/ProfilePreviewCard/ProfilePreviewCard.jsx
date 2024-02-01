import './ProfilePreviewCard.css';
import { Link } from 'react-router-dom';
import { useUser } from '../../UserContext';

const ProfilePreviewCard = () => {
  const [user, setUser] = useUser();
  const userData = user?.data.user || {};

  return (
    <div className='profile_preview_card'>
      <div
        className='round_picture_preview'
        style={{
          backgroundImage: userData.avatar ? `url(${userData.avatar})` : 'none',
          backgroundColor: userData.avatar ? 'transparent' : 'grey'
        }}
      ></div>
      {!user && <Link className='profile_link' to="/login">Login/Signup</Link>}
      {user && (
        <span>
          <Link className='profile_link' to='/profile'>{`Hi, ${userData.username}`}</Link>
          <span onClick={() => setUser()}>🚫</span>
        </span>
      )}
    </div>
  );
}

export default ProfilePreviewCard;

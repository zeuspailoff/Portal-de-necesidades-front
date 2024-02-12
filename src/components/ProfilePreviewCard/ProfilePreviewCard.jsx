import './ProfilePreviewCard.css';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../UserContext';

const ProfilePreviewCard = () => {
  const [user, setUser] = useUser();
  const navigate = useNavigate();

  const logout = () => {
    setUser();
    navigate('/');
  }

  const backgroundImageUrl = user && user.profile_picture ? `url("http://localhost:8080/${user.profile_picture.replace(/\\/g, '/')}")` : 'none'

  return (
    <div className='profile_preview_card'>
      <div
        className='round_picture_preview'
        style={{
          backgroundImage: backgroundImageUrl,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: user?.profile_picture ? 'transparent' : 'grey'
        }}
      ></div>
      {!user && <Link className='profile_link' to="/login">Login/Signup</Link>}
      {user && (
        <span>
          <Link className='profile_link' to={`/profile/${user.id}`} >{`Hi, ${user.username}`}</Link>
          <Link className='profile_link_occult' to={`/profile/${user.id}`} >Profile</Link>
          <span className='logout_button' onClick={logout}>🚫</span>
        </span>
      )}
    </div>
  );
}

export default ProfilePreviewCard;

import React, { useState } from 'react';
import './ProfilePreviewCard.css';
import { Link } from 'react-router-dom';

const ProfilePreviewCard = () => {
    const [isLogged, setIsLogged] = useState(true);

    const username = 'Peterinski';
    const userProfilePicSrc = '/shrek_whet.JPG';

    const toggleLogin = () => {
        setIsLogged(!isLogged);
    };

    return (
        <div className={`profile_preview_card ${isLogged ? 'logged-in' : 'not-logged-in'}`}>
            <div className='round_picture_preview' style={isLogged ? {backgroundImage: `url(${userProfilePicSrc})`} : null}></div>
            <h3>{isLogged ? <Link to='/profile'>{`Hi, ${username}`}</Link> : 'Login / Sign Up'}</h3>
            {isLogged && <button onClick={toggleLogin}>
                Logout
            </button>}
        </div>
    );
}

export default ProfilePreviewCard;

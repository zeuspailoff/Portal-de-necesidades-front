import React, { useState } from 'react';
import './ProfilePreviewCard.css';
import { Link } from 'react-router-dom';

const ProfilePreviewCard = () => {
    const [isLogged, setIsLogged] = useState(true);

    /* /////////////////////////////////////////////// */
    /* TEST DATA, PLEASE MAKE SURE TO DELETE AFTER USE */

    const { username, userProfileImg } = {
        username: 'Pablo',
        userBirthdate: '12/05/1995',
        userRegisteredAt: '01/01/2000',
        userProfileImg: '/shrek_whet.JPG',
        userDescription: 'I am a very good user whom likes gitiñoore'
    };

    /* TEST DATA, PLEASE MAKE SURE TO DELETE AFTER USE */
    /* /////////////////////////////////////////////// */

    const toggleLogin = () => {
        setIsLogged(!isLogged);
    };

    return (
        <div className={`profile_preview_card ${isLogged ? 'logged-in' : 'not-logged-in'}`}>
            <div className='round_picture_preview' style={isLogged ? {backgroundImage: `url(${userProfileImg})`} : null}></div>
            <h3>{isLogged ? <Link to='/profile'>{`Hi, ${username}`}</Link> : 'Login / Sign Up'}</h3>
            {isLogged && <button onClick={toggleLogin}>
                Logout
            </button>}
        </div>
    );
}

export default ProfilePreviewCard;

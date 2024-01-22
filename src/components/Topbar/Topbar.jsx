import './Topbar.css'
import ProfilePreviewCard from '../ProfilePreviewCard/ProfilePreviewCard';

const Topbar = () => {
    const logoImgSrc = '../src/assets/images/app_logo.jpg';

    return (
        <div className='card_container'>
            <ProfilePreviewCard />
        </div>
    );
}

export default Topbar;
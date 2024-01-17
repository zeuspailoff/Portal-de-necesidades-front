import './Topbar.css'
import ProfilePreviewCard from '../ProfilePreviewCard/ProfilePreviewCard';

const Topbar = () => {
    const logoImgSrc = '../../public/logo.jpg';

    return (
        <div className='topbar'>
            <img src={logoImgSrc} alt="iNeedApp made with love logo" />
            <ProfilePreviewCard />
        </div>
    );
}

export default Topbar;
import { Link } from 'react-router-dom'
import './Header.css'
import ProfilePreviewCard from '../ProfilePreviewCard/ProfilePreviewCard';
import Logo from '../Logo/logo.png';


const Header = () => {
  return (
    <div className='header_wrapper'>
      <div className='preview_card_container_hidden'>
        <ProfilePreviewCard />
      </div>

      <div className='logo_container'>
        <Link to='/' style={{display:'flex'}}><img className='logo' src={Logo} /></Link>
      </div>

      <div className='links_wrapper'>
        <ul className='links_container'>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/demands'>DEMANDS</Link></li>
          <li><Link to='/faqs'>FAQS</Link></li>
        </ul>
      </div>
      <div className='preview_card_container'>
        <ProfilePreviewCard />
      </div>
    </div>
  )
}

export default Header
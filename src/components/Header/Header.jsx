import { Link } from 'react-router-dom'
import './Header.css'
import ProfilePreviewCard from '../ProfilePreviewCard/ProfilePreviewCard';

const Header = () => {

  return (
    <div className='header_wrapper'>
      <div className='logo_container'>
        <h1>iNeed<span>Up</span></h1>
        <h3>Needs and solutions connected</h3>
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
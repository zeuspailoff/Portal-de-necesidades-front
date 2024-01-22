import { Link } from 'react-router-dom'
import Topbar from '../Topbar/Topbar'
import './Header.css'

const Header = () => {

  return (
    <div>
      <header>
        <h1>iNeed<span>Up</span></h1>
        <h3>Needs and solutions connected</h3>
        <ul className='links_container'>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/demands'>DEMANDS</Link></li>
          <li><Link to='/faqs'>FAQS</Link></li>
          <li><Link to='/login-signup'><Topbar /></Link></li>
        </ul>
      </header>
    </div>
  )
}

export default Header
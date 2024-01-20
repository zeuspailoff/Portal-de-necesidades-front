import { Link } from 'react-router-dom'
import Topbar from '../Topbar/Topbar'
import './Header.css'

const Header = () => {

  return (
    <div>
      <Topbar />
        <header>
          <h1>iNeed<span>Up</span></h1>
          <h3>Needs and solutions connected</h3>
          <ul className='links_container'>
            <li><a href='/'>HOME</a></li>
            <li><a href='/demands'>DEMANDS</a></li>
            <li><a href='/faqs'>FAQS</a></li>
            <li><a href='/login-signup'>LOGIN/SIGNUP</a></li>
          </ul>
        </header>
      </div>
  )
}

export default Header
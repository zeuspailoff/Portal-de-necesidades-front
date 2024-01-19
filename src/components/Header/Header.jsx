import { Link } from 'react-router-dom'
import Topbar from '../Topbar/Topbar'
import './Header.css'

const Header = () => {

  return (
    <header>
      <Topbar />
      <h1>Needs portal</h1>
      <nav>
        <Link to="/" className='links'>Home</Link>
        <Link to="/demands" className='links'>Demands</Link>
        <Link to="/faqs" className='links'>FAQs</Link>
        <Link to="/login-signup" className='links'>Login/Signup</Link>
      </nav>
    </header>
  )
}

export default Header
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <img src="../logo.jpg"/>
      <h1>Needs portal</h1>
      <nav>
        <Link to="/" className='links'>Home</Link>
        <Link to="/demands" className='links'>Demands</Link>
        <Link to="/faqs" className='links'>FAQs</Link>
        <Link to="/login" className='links'>Login</Link>
        <Link to="/signup" className='links'>Sign up</Link>
      </nav>
    </header>
  )
}

export default Header
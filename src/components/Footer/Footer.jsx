import { Link } from 'react-router-dom'
import './Footer.css'
const Footer = () => {

    return (
        <div>
            <div className='about'>
                <h3>About</h3>
                <ul>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/">Categories</Link></li> {/* Si se hace una página para categorias */}
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="">Starting guide</Link></li>
                    <li><Link to="https://www.hackaboss.com">Where all started</Link></li>
                </ul>
            </div>
            <div className='terms'>
                <h3>Terms</h3>
                <ul>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                    <li><Link to="/terms">Terms and Conditions</Link></li>
                    <li><Link to="/copyright">Copyright Policy</Link></li>
                </ul>
            </div>
            <p className='copyright'>Copyright © 2024 I need up. All rights reserved.</p>
        </div>
    )
}
export default Footer
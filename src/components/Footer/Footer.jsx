import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
      <footer>
        <div className="footer_container">
          <div className="footer_logo">
            <h4>iNeed<span>Up</span></h4>
            <h5>Needs and solutions connected</h5>
            <div className="footer_links">
            <div>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
              <Link to="/copyright">Copyright</Link>
            </div>
            <div>
              <Link to="/privacy" className='footer-link'>Privacy Politic</Link>
              <Link to="/terms" className='footer-link'>Terms and Conditions</Link>
              <Link to="/categories" className='footer-link'>Categories</Link>
            </div>
          </div>
            <h6 className='copy-text'>Copyright 2024, HAB-JSB28RT Team[whatever], no rights reserved at all.</h6>
          </div>
        </div>
      </footer>
    )
}

export default Footer;
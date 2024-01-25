import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
      <footer>
        <div className="footer_container">
          <div className="footer_logo">
            <h4>iNeed<span>Up</span></h4>
            <h5>Needs and solutions connected</h5>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <h6>Copyright 2024, HAB-JSB28RT Team[whatever], no rights reserved at all.</h6>
          </div>
        </div>
      </footer>
    )
}

export default Footer;
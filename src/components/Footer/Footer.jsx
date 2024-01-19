import './Footer.css'
const Footer = () =>{

    return(
        <div>
            <div className='about'>
                <h3>About</h3>
                <ul>
                    <li><a href="/about">About us</a></li>
                    <li><a href="/">Categories</a></li> {/* Si se hace una página para categorias */}
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="">Starting guide</a></li>
                    <li><a href="https://www.hackaboss.com">Where all started</a></li>
                </ul>
            </div>
            <div className='terms'>
                <h3>Terms</h3>
                <ul>
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms and Conditions</a></li>
                    <li><a href="/copyright">Copyright Policy</a></li>
                </ul>
            </div>
            <p className='copyright'>Copyright © 2024 I need up. All rights reserved.</p>
        </div>
    )
}
export default Footer
import './Footer.css'
const Footer = () =>{

    return(
        <div className="footer">
            <div>
                <h3>I need up</h3>
                <ul>
                    <li><a href="/faqs">FAQs</a></li>
                    <li><a href="/demands">Demands</a></li>
                    <li><a href="/">Categories</a></li> {/* Si se hace una página para categorias */}
                    <li><a href="/">Freelancers</a></li>{/* Si se hace una página que saque usuarios */}
                </ul>
            </div>
            <div>
                <h3>About</h3>
                <ul>
                    <li><a href="">About us</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Starting guide</a></li>
                    <li><a href="">Where all started</a></li>
                </ul>
            </div>
            <div>
                <h3>Terms</h3>
                <ul>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms and Conditions</a></li>
                    <li><a href="">Copyright Policy</a></li>
                </ul>
            </div>
            <p>Copyright © 2024 I need up. All rights reserved.</p>
        </div>
    )
}
export default Footer
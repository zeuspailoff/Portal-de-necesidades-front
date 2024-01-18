import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
const About = () =>{
     return(
        <div>
            <Header/>
            <h1>About us</h1>
            <p>Do you want to meet the people behind this website? Now we our gonna introduce ourselves and tell you about us!</p>
            <div>
                <h3>Kevin</h3>
                <img src="../shrek_whet.JPG"/>
                <p>jfoecsca</p>
            </div>
            <div>
                <h3>Martín</h3>
                <img src="../shrek_whet.JPG"/>
                <p>jfoecsca</p>
            </div>
            <div>
                <h3>Andrea</h3>
                <img src="../shrek_whet.JPG"/>
                <p>jfoecsca</p>
            </div>
            <div>
                <h3>Abraham</h3>
                <img src="../shrek_whet.JPG"/>
                <p>jfoecsca</p>
            </div>
            <Footer/>
        </div>
    )
}
export default About
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import "./About.css"
const About = () =>{
     return(
        <div>
            <Header/>
            <h1 className="contact-intro titleMovement" >About us</h1>
            <p className="contact-intro">Do you want to meet the people behind this website? Now we our gonna introduce ourselves and tell you about us!</p>
            <div className="contact-container">
                <h3 className="contact-name">Abraham</h3>
                <img src="src\assets\images\shrek_whet.JPG" className="contact-pic"/>
                <p className="contact-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eum dolores? Laborum nihil voluptas placeat eligendi a dolorum, odit, molestias pariatur quasi sapiente ex dolor suscipit quisquam itaque, libero harum!</p>
                <a href="https://www.linkedin.com/in/abrahamdiazgonzalez/" target="blank" className="contact-link">Checkout my LinkedIn</a>
            </div>
            <div  className="contact-container">
                <h3 className="contact-name">Martín</h3>
                <img src="src\assets\images\shrek_whet.JPG" className="contact-pic"/>
                <p className="contact-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur molestiae sapiente aperiam mollitia odio! Corporis soluta earum atque unde, quas praesentium recusandae doloremque itaque fugiat adipisci, quae ut reprehenderit totam?</p>
                <a href="https://www.linkedin.com/in/martin-rosa/" target="blank" className="contact-link">Checkout my LinkedIn</a>
            </div>
            <div  className="contact-container">
                <h3 className="contact-name">Andrea</h3>
                <img src="src\assets\images\shrek_whet.JPG" className="contact-pic"/>
                <p className="contact-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non tempora alias, obcaecati animi quis, incidunt ullam ut minima libero repudiandae ex excepturi? Recusandae voluptatibus repellat eius velit eligendi placeat!</p>
                <a href="https://www.linkedin.com/in/andreamrtzramos/" target="blank" className="contact-link">Checkout my LinkedIn</a>
            </div>
            <div  className="contact-container">
                <h3 className="contact-name">Kevin</h3>
                <img src="src\assets\images\shrek_whet.JPG" className="contact-pic"/>
                <p className="contact-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi porro facilis hic voluptas corrupti amet et delectus quos cupiditate veniam officiis, consequuntur neque soluta natus! Ratione animi debitis magni incidunt?</p>
               <a href="https://www.linkedin.com/in/kevinghio/" target="blank" className="contact-link">Checkout my LinkedIn</a>
            </div>
          
        </div>
    )
}
export default About
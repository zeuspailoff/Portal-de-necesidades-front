import Info from "../../components/Info/info";
import './Home.css'
const Home = () => {

    return (
        <div className="general-container">
            <div className="home_description_container">
                <p className="home_description">Welcome to <strong>iNeedUp</strong>, a website where you can make and find demands and make proposals. Explore our <a href="/categories">categories</a> to see the demands of your interest</p>
            </div>
            <Info />
        </div>
    )
}
export default Home
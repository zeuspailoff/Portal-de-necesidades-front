import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Demand from "../Demands/Demand";
import Footer from "../../components/Footer/Footer";
const Demands = () => {


    return (
        <div>
            <Header/>
            <SearchBar/>
            {/** AQUÍ SE HARÍA LA LÓGICA PARA SACAR LAS DEMANDS CON EL BACK */}
             <Link to="/demand">Demand</Link> {/* Habrá que ver otra forma de meter el link */}
             <Footer/>
        </div>
    )
}
export default Demands
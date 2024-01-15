import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Demand from "../Demands/Demand";
const Demands = () => {

    return(
        <div>
            <Header/>
            <SearchBar/>
            {/** AQUÍ SE HARÍA LA LÓGICA PARA SACAR LAS DEMANDS CON EL BACK */}
             <Link to="/demand">Demand</Link> {/* Habrá que ver otra forma de meter el link */}
        </div>
    )
}
export default Demands
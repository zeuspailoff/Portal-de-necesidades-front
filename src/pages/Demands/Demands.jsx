import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Demand from "../Demands/Demand";
const Demands = () => {


    return (
        <div>
            <Header />
            <SearchBar />
            <div>
                <Link to="/demand">Demand</Link> {/* Habrá que ver otra forma de meter el link */}
                <Demand />
            </div>
        </div>
    )
}
export default Demands
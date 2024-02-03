import Header from "../../components/Header/Header";
import DemandList from "../../components/Demands/DemandList";
import SearchBar from "../../components/SearchBar/SearchBar";
import './Demands.css';
const Demands = () => {

    return (
        <>
            <Header />
            <div className="demands">
                <DemandList />
            </div>
        </>
    )
}
export default Demands
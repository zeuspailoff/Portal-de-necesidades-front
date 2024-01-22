import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import DemandList from "../../components/Demands/DemandList";
import './Demands.css';
const Demands = () => {
    return (
        <>
            <Header />
            <div className="demands">
                <SearchBar />
                <DemandList />
            </div>
        </>
    )
}
export default Demands
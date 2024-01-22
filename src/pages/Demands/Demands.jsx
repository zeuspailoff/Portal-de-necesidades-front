import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import DemandList from "../../components/Demands/DemandList";
import './Demands.css';
const Demands = () => {
    return (
        <>
            <Header />
            <h2>Demands</h2>
            <div className="demands">
                <SearchBar />
                <div>
                    <DemandList />
                </div>
            </div>
        </>
    )
}
export default Demands
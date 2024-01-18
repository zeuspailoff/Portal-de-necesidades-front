import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import DemandList from "../../components/Demands/DemandList";
const Demands = () => {


    return (
        <div>
            <Header />
            <SearchBar />
            <div>
                <h2>Demands</h2>
                <DemandList />
            </div>
        </div>
    )
}
export default Demands
import { useParams } from "react-router-dom";
import { useDemand } from "../../hooks/api";

const Demand = () => {

    const { id } = useParams();
    const demand = useDemand(id);
    console.log(demand);

    return (
        <div>
            <h2>{demand.data.username}</h2>
            <h3>{demand.data.demandTitle}</h3>
            <p>{demand.data.demandDescription}</p>
            <span>{demand.data.demandCreatedAt}</span>

        </div>
    )

}
export default Demand;


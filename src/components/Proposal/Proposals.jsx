import { useParams } from "react-router-dom";
import { useProposalByDemands } from "../../hooks/api";


const Proposals = () => {
    const { id } = useParams();
    const proposalsData = useProposalByDemands(id);
    return (
        <div>
            {proposalsData && proposalsData?.data.proposals.map((p) => (
                <div key={p.id}>
                    <p>{p.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Proposals;
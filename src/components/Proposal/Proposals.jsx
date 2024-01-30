import { useParams } from "react-router-dom";
import { useProposalByDemands } from "../../hooks/api";


const Proposals = () => {
    const { id } = useParams();
    const proposalsData = useProposalByDemands(id);
    if (proposalsData.error) {
        return (
            <div>
                <p>This demand has no proposals.</p>
            </div>
        )
    }
    return (
        <div>
            {proposalsData ? proposalsData?.data.proposals.map((p) => (
                <div key={p.id}>
                    <p>{p.title}</p>
                </div>
            )) : ''}
        </div>
    );
}

export default Proposals;
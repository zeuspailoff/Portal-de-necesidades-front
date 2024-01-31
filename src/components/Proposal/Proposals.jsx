import { useParams } from "react-router-dom";
import { useProposalByDemands } from "../../hooks/api";
import './Proposals.css';


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
          {proposalsData ? proposalsData.data.proposals.map((p) => (
            <div className="demand_proposals_container" key={p.id}>
              <div className="demand_proposals_id">
                <h2>Proposal #{p.id}</h2>
              </div>
              <div className="demand_proposals_description">
                <p>{p.description}</p>
              </div>
            </div>
          )) : null}
        </div>
      );      
}

export default Proposals;
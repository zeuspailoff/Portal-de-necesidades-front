import { useParams } from "react-router-dom";
import { useUser } from "../../UserContext";
import { useProposalByDemands, useDeleteProposals } from "../../hooks/api";
import Rating from "./Rating";
import './Proposals.css';

const Proposals = () => {
  const { id } = useParams();
  const [user] = useUser();
  const userId = user.data.data.user.id;
  const proposalsData = useProposalByDemands(id);
  const deleteProposalById = useDeleteProposals(); // Keep on working from here

  if (proposalsData.error) {
    return (
      <div>
        <p>This demand has no proposals.</p>
      </div>
    );
  }

  const testEditButton = () => console.log('Edit proposal');

  const deleteProposal = (proposalId) => {
    proposalId.toString();
    deleteProposalById(proposalId);
  };

  return (
    <div className="preview_proposal_cards">
      {proposalsData
        ? proposalsData.data.proposals.map((p) => (
            <div className='proposal_card' key={p.id}>
              <div className='proposal_card_user_info'>
                <div className="img_h4_container">
                <img className='proposal_user_avatar' src={p.userAvatar} alt={p.username + '_avatar'} />
                <h4>{p.username}</h4>
                <div className="edit_buttons_container_proposal">
                  {userId == p.user_id ? (
                    <button className="edit_button edit_delete_btn" onClick={testEditButton}>
                      ✏️
                    </button>
                  ) : null}
                  {userId == p.user_id ? (
                    <button className="delete_button edit_delete_btn" onClick={() => deleteProposal(p.id)}>
                      🗑️
                    </button>
                  ) : null}
                </div>
                </div>
                
              </div>

              <div className='proposal_card_proposal_info'>
                <h4>Proposal #{p.id}</h4>
                <p>{p.description}</p>
                <div className='proposal_card_files'>
                  {p?.files &&
                    p.files.map((file, key) => (
                      <a key={key} href={file} download>
                        {`Download file #${key + 1} `}
                      </a>
                    ))}
                </div>
              </div>
              <div className='proposal_card_votes_info'>
                <ul>
                  <li>Votes: {p.voteCounts}</li>
                  <li>Average score: {p.votesAvg}</li>
                </ul>
                <Rating />
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default Proposals;

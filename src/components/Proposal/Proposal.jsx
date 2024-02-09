import Rating from './Rating';
import './Proposal.css';

const Proposal = ({proposal}) => {
    console.log(proposal);
    return (
        <div className='proposal_card'>
            <div className='proposal_card_user_info'>
                <img className='proposal_user_avatar' src={proposal.userAvatar} alt={proposal.username + '_avatar'} />
                <h4>{proposal.username}</h4>
            </div>
            <div className='proposal_card_proposal_info'>
                <p>{proposal.description}</p>
                <div className='proposal_card_files'>
                    {proposal?.files && proposal.files.map((file, key) => (
                    <a key={key} href={file} download>
                        {`Download file #${key + 1} `}
                    </a>
            ))}
        </div>
            </div>    
        <div className='proposal_card_votes_info'>
            <ul>
                <li>Votes: {proposal.voteCounts}</li>
                <li>Average score: {proposal.votesAvg}</li>
            </ul>
            <Rating proposal_id={p.id} currentValue={p.votesAvg} />
        </div>    
        </div>
    );
}

export default Proposal;
import './Proposal.css';
import Rating from './Rating';



const Proposal = ({proposal}) => {
    return (
        <div className='proposal_card'>
            <div>
                <img src={proposal.userAvatar} alt={proposal.username + '_avatar'} />
                <h5>{proposal.username}</h5>
            </div>
                <h2>{proposal.title}</h2>
                <p>{proposal.description}</p>
            <div>
            {proposal?.files && proposal.files.map((file, key) => (
                <a key={key} href={file} download>
                    Download file #{key + 1}
                </a>
            ))}
        </div>        
            <ul>
                <li>Votes: {proposal.voteCounts}</li>
                <li>Average score: {proposal.votesAvg}</li>
            </ul>
            <Rating />
        </div>
    );
}

export default Proposal;
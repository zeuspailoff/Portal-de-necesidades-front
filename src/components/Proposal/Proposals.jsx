import { useParams } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../../UserContext";
import { useUserActions } from "../../hooks/api";
import Rating from "./Rating";
import './Proposals.css';
import { FileIcon, defaultStyles } from 'react-file-icon';


const Proposals = ({ proposals }) => {
  const { id } = useParams();
  const [user] = useUser();
  const userId = user.id;
  const { deleteProposal } = useUserActions();
  const [error, setError] = useState(null)

  const getFileExtension = (filename) => {
    const parts = filename.split('.');
    const type = parts[parts.length - 1];

    return type;
  }


  if (proposals.error) {
    setError(proposals.error.toString());
  }

  if (proposals?.length == 0) {
    return (
      <div>
        <p>This demand has no proposals.</p>
      </div>
    );
  }


  const handleDelete = (id) => {
    deleteProposal(id);
    window.location.reload();
  };


  return (
    <div className="preview_proposal_cards">
      {proposals
        ? proposals.map((p) => (
          <div className='proposal_card' key={p.id}>
            <div className='proposal_card_user_info'>
              <div className="img_h4_container">
                <img className='proposal_user_avatar' src={"http://localhost:8080/" + p.profile_picture} alt={p.creator_username + '_avatar'} />
                <h4>{p.creator_username}</h4>
              </div>
            </div>

            <div className='proposal_card_proposal_info'>
              <h4>Proposal #{p.id}</h4>
              <p>{p.description}</p>
              <div className='proposal_card_files'>
              {/* {console.log(p.proposalFiles[0])} */}
                {p?.proposalFiles && p?.proposalFiles[0]?.id ?
                  p.proposalFiles.map((file) => (
                    <div key={file.id} className="demand_files">
                      <div className="file_icon">
                        <a key={file.id} href={"http://localhost:8080/" + file.src} download>
                          {`Download file #${file.id} `}
                        </a>
                        <FileIcon
                          extension={getFileExtension(file.src)}
                          style={{ width: '20px', height: '20px' }}
                          {...defaultStyles[getFileExtension(file.src)]}
                        />
                      </div>
                    </div>

                  )) : null}
              </div >
            </div>
            <div className='proposal_card_votes_info'>
              <ul>
                <li>Votes: {p.voteCount}</li>
                <li>Average score: {p.votesAvg}</li>
                {error && error?.error && (
                  <p >{error.data.message}</p>
                )}
              </ul>
              <Rating proposal_id={p.id} currentValue={p.voteAvg} />
            </div>
          </div>
        ))
        : null}
    </div>
  );
};

export default Proposals;

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
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
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
                <img className='proposal_user_avatar' src={apiUrl + p.profile_picture} alt={p.creator_username + '_avatar'} />
                <h4>{p.creator_username}</h4>
              </div>
            </div>

            <div className='proposal_card_proposal_info'>
              <h4>Proposal #{p.id}</h4>
              <p>{p.description}</p>
              <div className='proposal_card_files'>
                {p?.proposalFiles && p?.proposalFiles[0]?.id ?
                  p.proposalFiles.map((file) => (
                    <div key={file.id} className="proposal_files">
                      <a key={file.id} href={apiUrl + file.src} download>
                        {`Display File`}
                      </a>
                      <div className="file_icon">
                        <FileIcon
                          className="fileIcon"
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
              <p>Votes: {p.voteCount}</p>
              <div className="average_score">
                <p>Average score: {p.votesAvg}</p>
                {error && error?.error && (
                  <h4>{error.data.message}</h4>
                )}

                <Rating proposal_id={p.id} currentValue={p.voteAvg} />
              </div>
            </div>
          </div>
        ))
        : null}
    </div>
  );
};

export default Proposals;

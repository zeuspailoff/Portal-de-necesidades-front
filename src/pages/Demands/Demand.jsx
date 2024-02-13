import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDemand, useDeleteDemands, useProposalByDemands, useUserActions } from "../../hooks/api";
import { useUser } from "../../UserContext";
import { FormattedDate } from "react-intl";
import NewProposal from "../../components/Proposal/NewProposal";
import Proposals from "../../components/Proposal/Proposals";
import { FileIcon, defaultStyles } from 'react-file-icon';
import './Demand.css';

const Demand = () => {

  const [user] = useUser();
  const { id } = useParams();
  const demandData = useDemand(id);
  const deleteDemandById = useDeleteDemands(id);
  const navigate = useNavigate();
  const { closeDemands } = useUserActions();
  const { deleteFile } = useUserActions()
  const demand = demandData.data;
  const proposalsData = useProposalByDemands(id);
  const [error, setError] = useState(proposalsData)
  const apiUrl = import.meta.env.VITE_BACKEND_URL;


  const [proposals, setProposals] = useState(proposalsData?.data?.proposals);
  const getFileExtension = (filename) => {
    const parts = filename.split('.');
    const type = parts[parts.length - 1];

    return type;
  }


  //////// EDIT AND DELETE BUTTONS ////////

  const deleteDemand = () => {

    if (user.Id == demand.user_Id) {
      deleteDemandById(id);
      navigate('/demands');
      window.location.reload();
    }
  };

  const closeDemand = () => {
    closeDemands(demand.id)
  }
  const deleteFiles = async (id) => {
    const deletedFile = await deleteFile(id)
    return deletedFile;

  }

  const handleDeleteFile = async (e) => {
    const id = e.target.id;
    const response = await deleteFiles(id)
    if (response.data.status == 200) {
      e.target.parentNode.remove();
    }
  }

  //////// EDIT AND DELETE and close BUTTONS ////////

  return (
    <div>

      <div className='demand_container'>

        <div className="upper_container">
          <div className="h2_h4_container">
            <div className="img_h4_container">
              <img className='proposal_user_avatar' src={apiUrl + demand.userAvatarSrc} alt={demand.userName + '_avatar'} />
              <h4 ><Link to={`/profile/${demand.user_id}`}>{demand.userName}</Link></h4>
            </div>
            <h2>#{id} {demand.title}</h2>
            <div className="edit_buttons_container_demand">
              {user?.id == demand.user_id && demand.status == 0 ? <Link to={`/demands/edit/${id}`} ><button className="edit_button edit_delete_btn" title="Edit" >✏️</button> </Link> : null}
              {user?.id == demand.user_id ? <button className="delete_button edit_delete_btn" title="Delete" onClick={deleteDemand}>🗑️</button> : null}
              {user?.id == demand.user_id ? <button className="delete_button edit_delete_btn" title="Close Demand" onClick={closeDemand}>✅</button> : null}
            </div>
          </div>
        </div>
        {demand.status == 1 ? <h3>Closed</h3> : null}
        <h4>Created: <FormattedDate value={demand.created_at} day="2-digit" month="long" /></h4>
        <section className='description'>
          <div>
            <div className='description_wrapper'>
              <h3>Description:</h3>
              <p>{demand.description}</p>
            </div>
            <div className='files_wrapper'>
              <h3>Files:</h3>
              <div className='demand_files'>
                {demand.demandFiles ? Object.values(demand.demandFiles).map((file) => (
                  <div key={file.fileId} className="fileIcon" >
                    {user?.id == demand.user_id ? <button id={file.fileId} className="deleteFile" title="Delete File" onClick={handleDeleteFile}>❌</button> : null}
                    <a
                      href={apiUrl + file.fileSrc}
                      download
                      target="_blank" rel="noreferrer"
                    >
                      <FileIcon
                        extension={getFileExtension(file.fileSrc)}
                        style={{ width: '100px', height: '100px' }}
                        {...defaultStyles[getFileExtension(file.fileSrc)]}
                      />
                    </a>

                  </div>
                )) : <p>We have no files to show you.</p>}
              </div>
            </div>
          </div>

        </section>
      </div>
      {user &&
        <div>
          <div>
            <section className='proposals_wrapper'>
              <h2>Proposals for this demand:</h2>
              {proposals && proposals.length > 0 ? <Proposals proposals={proposals} setProposals={setProposals} /> : <p>This demand does not contain proposals</p>}

            </section>
          </div>

          <div className='new_proposal_container'>
            <NewProposal proposals={proposals} setProposals={setProposals} error={error} setError={setError} />
          </div>
        </div>

      }

    </div>
  )

}
export default Demand;

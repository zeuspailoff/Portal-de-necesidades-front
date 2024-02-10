import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDemand, useDeleteDemands, useProposalByDemands } from "../../hooks/api";
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
  const demand = demandData.data;
  const proposalsData = useProposalByDemands(id);
  const [error, setError] = useState(proposalsData)

  const [proposals, setProposals] = useState(proposalsData?.data?.proposals);


  const getFileExtension = (filename) => {
    const parts = filename.split('.');
    const type = parts[parts.length - 1];

    return type;
  }


  //////// EDIT AND DELETE BUTTONS ////////
  const testEditButton = () => {
    console.log('Edit demand');
  };
  const deleteDemand = () => {

    if (user.Id == demand.user_Id) {
      deleteDemandById(id);
      navigate('/demands');
      window.location.reload();
    }
  };
  //////// EDIT AND DELETE BUTTONS ////////

  return (
    <div>

      <div className='demand_container'>

        <div className="upper_container">
          <div className="h2_h4_container">
            <h2>#{id} {demand.title}</h2>
            <h4>Created: <FormattedDate value={demand.created_at} day="2-digit" month="long" /></h4>
            <div className="edit_buttons_container_demand">
              {user.Id == demand.user_Id ? <Link to={`/demands/edit/${id}`} ><button className="edit_button edit_delete_btn" onClick={testEditButton}>✏️</button> </Link> : null}
              {user.Id == demand.user_Id ? <button className="delete_button edit_delete_btn" onClick={deleteDemand}>🗑️</button> : null}
            </div>
          </div>
        </div>
        <section className='description'>
          <div>
            <div className='description_wrapper'>
              <h3>Description:</h3>
              <p>{demand.description}</p>
            </div>
            <div className='files_wrapper'>
              <h3>Files:</h3>
              <div className='demand_files'>
                {demand.files ? Object.values(demand.files).map((file, key) => (
                  <div key={key} className="fileIcon" >
                    <a
                      href={"http://localhost:8080/" + file.fileSrc}
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

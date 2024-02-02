import { useNavigate, useParams } from "react-router-dom";
import { useDemand, useDeleteDemands } from "../../hooks/api";
import { useUser } from "../../UserContext";
import { FormattedDate } from "react-intl";
import Header from "../../components/Header/Header";
import NewProposal from "../../components/Proposal/NewProposal";
import Proposals from "../../components/Proposal/Proposals";
import { FileIcon, defaultStyles } from 'react-file-icon';
import './Demand.css';

const Demand = () => {

  const [user] = useUser();
  const userId = user?.data.data.user.id;
  const { id } = useParams();
  const demand = useDemand(id);
  const deleteDemandById = useDeleteDemands(id);
  const navigate = useNavigate();
  const demandData = demand.data;

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

    if (userId == demandData.userId) {
      deleteDemandById();
      navigate('/demands');
      window.location.reload();
    }
  };
  //////// EDIT AND DELETE BUTTONS ////////

  return (
    <div>
      <Header />

      <div className='demand_container'>

        <div className="upper_container">
          <div className="h2_h4_container">
        <h2>#{id} {demandData.demandTitle}</h2>
        <h4>Created at: <FormattedDate value={demandData.demandCreatedAt} day="2-digit" month="long" /></h4>
        <div className="edit_buttons_container_demand">
            {userId == demandData.userId ? <button className="edit_button edit_delete_btn" onClick={testEditButton}>✏️</button> : null}
            {userId == demandData.userId ? <button className="delete_button edit_delete_btn" onClick={deleteDemand}>🗑️</button> : null}
          </div>
          </div>
          </div>
        <section className='description'>
          <div>
            <div className='description_wrapper'>
              <h3>Description:</h3>
              <p>{demandData.demandDescription}</p>
            </div>
            <div className='files_wrapper'>
              <h3>Files:</h3>
              <div className='demand_files'>
                {demandData.demandFiles ? Object.values(demandData.demandFiles).map((file, key) => (
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
              <Proposals />
            </section>
          </div>

          <div className='new_proposal_container'>
            <NewProposal />
          </div>
        </div>

      }

    </div>
  )

}
export default Demand;

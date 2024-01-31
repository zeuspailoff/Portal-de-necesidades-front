import { useNavigate, useParams } from "react-router-dom";
import { useDemand, useDeleteDemands } from "../../hooks/api";
import Header from "../../components/Header/Header";
import NewProposal from "../../components/Proposal/NewProposal";
import Proposals from "../../components/Proposal/Proposals";
import { FormattedDate } from "react-intl";
import FilePreview from "../../components/FilePreview/FilePreview";
import './Demand.css';

const Demand = () => {

  const { id } = useParams();
  const demand = useDemand(id);
  const deleteDemandById = useDeleteDemands(id);
  const navigate = useNavigate();

  const demandData = demand.data;

  const getFileExtension = (filename) => {
    const parts = filename.split('.');
    const type = parts[parts.length - 1];
    console.log(type);

    return type;
  }

   //////// EDIT AND DELETE BUTTONS ////////
   const testEditButton = () => {
    console.log('Edit demand');
  }; 

  const deleteDemand = () => {
    console.log('Delete demand', deleteDemandById());
    navigate('/demands');
    window.location.reload();
  };
  //////// EDIT AND DELETE BUTTONS ////////


  return (
    <div>
      <Header />

      <div className='demand_container'>
        <h2>#{id} {demandData.demandTitle}</h2>
        <h4>Created at: <FormattedDate value={demandData.demandCreatedAt} day="2-digit" month="long" /></h4>
        <section className='description'>
          <div>
            <div className='description_wrapper'>
              <h3>Description:</h3>
              <p>{demandData.demandDescription}</p>
            </div>
            <div className='files_wrapper'>
              <h3>Files:</h3>
              <div className='demand_files'>
                {Object.values(demandData.demandFiles).map((file, key) => (
                  <div key={key}>
                    <FilePreview fileUrl={file.fileSrc} fileType={getFileExtension(file.fileSrc)} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        <div className="edit_buttons_container">
          <button className="edit_button button" onClick={testEditButton}>Edit demand</button>
          <button className="delete_button button" onClick={deleteDemand}>Delete demand</button>
        </div>
        </section>
      </div>
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
  )

}
export default Demand;

import { useParams } from "react-router-dom";
import { useDemand } from "../../hooks/api";
import Header from "../../components/Header/Header";
import NewProposal from "../../components/Proposal/NewProposal";
import { FormattedDate } from "react-intl";
import FilePreview from "../../components/FilePreview/FilePreview";

const Demand = () => {

  const { id } = useParams();
  const demand = useDemand(id);

  const getFileExtension = (filename) => {
    const parts = filename.split('.');
    const type = parts[parts.length - 1];
    console.log(type);

    return type;
  }

  return (
    <div>
      <Header />

      <div className='demand_container'>
        <h2>#{id} {demand.data.demandTitle}</h2>
        <h3><FormattedDate value={demand.data.demandCreatedAt} day="2-digit" month="long" /></h3>
        <section className='description'>
          <div>
            <div className='description_wrapper'>
              <h3>Description:</h3>
              <p>{demand.data.demandDescription}</p>
            </div>
            <div className='files_wrapper'>
              <h3>Files:</h3>
              <div className='demand_files'>
                {Object.values(demand.data.demandFiles).map((file, key) => (
                  <div key={key}>
                    <FilePreview fileUrl={file.fileSrc} fileType={getFileExtension(file.fileSrc)} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='new_proposal_container'>
        <NewProposal />
      </div>

      {/* <div>
              <section className='proposals'>
                  <h3>Proposals for this demand:</h3>
                  {[PROPOSALS FOR THIS DEMAND].map((proposal) => (
                    <div className='proposal_container' key={proposal.id}>
                      <Proposal proposal={proposal} />
                    </div>
                  ))}
              </section>
            </div> */}
    </div>
  )

}
export default Demand;

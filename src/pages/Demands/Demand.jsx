import React, { useState } from 'react';
import Header from "../../components/Header/Header";

const Demand = (props) => {

  /* Test data, please make sure to delete after use */
  const getDemandById = { // Simulates fetch getDemandById(props.demand_id)
    demandId: 1,
    demandTitle: 'Test demand #1',
    demandDescription: 'This is the #1 demand description, and it is very very good',
    demandFiles: {
      file1: '/shrek_whet.JPG',
      file2: '/shrek_whet.JPG',
      file3: '/shrek_whet.JPG'
    }
  };

  const getProposalsByDemandId = [ // Simulates fetch getProposalsByDemandId(props.demand_id)
    {
      title: 'Proposal 1 for demand 1',
      description: 'This is the proposal #1',
      files: {
        file1: '/shrek_whet.JPG',
        file2: '/shrek_whet.JPG',
        file3: '/shrek_whet.JPG'
      },
      votes: '5',
      avgVotes: '3'
    },
    {
      title: 'Proposal 2 for demand 1',
      description: 'This is the proposal #2',
      files: {
        file1: '/shrek_whet.JPG',
        file2: '/shrek_whet.JPG',
        file3: '/shrek_whet.JPG'
      },
      votes: '4',
      avgVotes: '4'
    },
    {
      title: 'Proposal 3 for demand 1',
      description: 'This is the proposal #3',
      files: {
        file1: '/shrek_whet.JPG',
        file2: '/shrek_whet.JPG',
        file3: '/shrek_whet.JPG'
      },
      votes: '10',
      avgVotes: '1'
    }
  ];
  /* Test data, please make sure to delete after use */

  const [proposalsFetchedForThisDemand] = useState(getProposalsByDemandId);

  return (
    <div>
      <Header />

      <div className='demand_container'>
        <h2>{getDemandById.demandTitle}</h2>
        <section className='description'>
          <div>
            <h3>Description:</h3>
            <p>{getDemandById.demandDescription}</p>
            <h3>Files:</h3>
            <div className='demand_files'>
              {Object.values(getDemandById.demandFiles).map((file, key) => (
                <img src={file} alt={'file_' + key} key={key} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className='proposals'>
          <div>
            <h3>Proposals for this demand:</h3>
            {proposalsFetchedForThisDemand.map((proposal, key) => (
              <div className='proposal_container' key={key}>
                <h2>{proposal.title}</h2>
                <h3>Description:</h3>
                <p>{proposal.description}</p>
                <div className='proposal_files'>
                  {Object.values(proposal.files).map((file, fileKey) => (
                    <img src={file} alt={'proposalFile_' + fileKey} key={fileKey} />
                  ))}
                </div>
                <h4>Votes: {proposal.votes}, Avg votes: {proposal.avgVotes}</h4>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className='userData'>
        {/* Replace with actual user data from the backend */}
        <img alt="Imagen de perfil del usuario" />
        <p>Username</p>
        <p>User demands</p>
        <p>Voted proposals</p>
      </section>
    </div>
  );
};

export default Demand;

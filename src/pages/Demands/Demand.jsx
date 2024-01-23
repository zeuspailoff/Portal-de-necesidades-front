import React, { useState } from 'react';
import Header from "../../components/Header/Header";
import Proposal from '../../components/Proposal/Proposal';
import NewProposal from '../../components/Proposal/NewProposal';
import './Demand.css';

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
    id: 1,
    username: 'John Doe',
    userAvatar: 'https://avatars.githubusercontent.com/u/123456',
    votesAvg: 4,
    voteCounts: 2,
    description: 'Proposal Description',
    is_correct: 0,
    files : [
      {
        id: 1,
        src: 'http://localhost:3000/files/file1.pdf'
      },
      {
        id: 2,
        src: 'http://localhost:3000/files/file2.pdf'
      }
    ]
  },
  {
    id: 2,
    username: 'John Doe',
    userAvatar: 'https://avatars.githubusercontent.com/u/123456',
    votesAvg: 4,
    voteCounts: 2,
    description: 'Proposal Description',
    is_correct: 0,
    files : [
      {
        id: 1,
        src: 'http://localhost:3000/files/file1.pdf'
      },
      {
        id: 2,
        src: 'http://localhost:3000/files/file2.pdf'
      }
    ]
  },
  {
    id: 3,
    username: 'John Doe',
    userAvatar: 'https://avatars.githubusercontent.com/u/123456',
    votesAvg: 4,
    voteCounts: 2,
    description: 'Proposal Description',
    is_correct: 0,
    files : [
      {
        id: 1,
        src: 'http://localhost:3000/files/file1.pdf'
      },
      {
        id: 2,
        src: 'http://localhost:3000/files/file2.pdf'
      }
    ]
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
            <div className='description_wrapper'>
              <h3>Description:</h3>
              <p>{getDemandById.demandDescription}</p>
            </div>
            <div className='description_wrapper'>
              <h3>Files:</h3>
              <div className='demand_files'>
                {Object.values(getDemandById.demandFiles).map((file, key) => (
                  <img src={file} alt={'file_' + key} key={key} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='new_proposal_container'>
        <NewProposal />
      </div>

      <div>
        <section className='proposals'>
            <h3>Proposals for this demand:</h3>
            {proposalsFetchedForThisDemand.map((proposal) => (
              <div className='proposal_container' key={proposal.id}>
                <Proposal proposal={proposal} />
              </div>
            ))}
        </section>
      </div>
    </div>
  );
};

export default Demand;

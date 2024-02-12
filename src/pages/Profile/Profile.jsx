import { FormattedDate } from 'react-intl';
import { useUser } from '../../UserContext';
import './Profile.css';
import { Link, useParams } from 'react-router-dom';
import UserDemands from '../../components/Demands/UserDemands';
import { useState } from 'react';
import { useUserActions } from "../../hooks/api";


const Profile = () => {
    const { userProfile } = useUserActions();
    const { userDemands } = useUserActions();
    const  { popularProposalsByUserId } = useUserActions();
    const { id } = useParams();

    const requestUser = userProfile(id)
    const [is_owner] = useState(requestUser?.data.is_owner);
    
    const usersDemands = userDemands(id)
    const [demands] = useState(usersDemands?.data?.length > 0 ? usersDemands.data.slice(0, 5) : []);

    const popularProposals = popularProposalsByUserId(id)
    const [popular_proposals] = useState(popularProposals?.data?.proposals);


    return (
        <div>
            <div className='profile_page'>
                <h2 className='profile_title'>User Profile:</h2>
                {is_owner && <div className="edit_buttons_container_profile">
                    <button className="edit_button edit_delete_btn edit_button_profile">
                        <Link to={"/users/edit/profile"}> ✏️ Edit profile</Link>
                    </button>
                </div>}
                <div className='user_data_row'>
                    <div className='user_data'>
                        <img src={requestUser.data.profile_picture ? 'http://localhost:8080/' + requestUser.data.profile_picture : null} alt={`User ${requestUser.data.username} profile mosaic`} />
                        <ul>
                            <li className='bold'>Username:</li>
                            <li className='separate'>{requestUser.data.username}</li>
                            <li className='bold'>Created at:</li>
                            <li><FormattedDate value={requestUser.data.created_at} day="2-digit" month="long" /></li>
                        </ul>
                    </div>

                    <div className='user_description'>
                        <h3>User bio:</h3>
                        <p>{requestUser.data.biography}</p>
                    </div>
                </div>

                <div className='proposals_demands_row'>
                    <div className='left_column'>
                        <div>
                            <h3>Most voted proposals</h3>
                            {popular_proposals?.map(proposal => (
                                <div className='proposal_container' key={proposal.id}>
                                    <h3>{proposal.description}</h3>
                                    <p>Overall score: {proposal.average_votes}</p>
                                </div>
                            ))}
                            {!popular_proposals && <p>No proposals were posted yet!</p>}
                        </div>
                    </div>
                    {demands ? <div className='right_column'>
                        <h3>Demands posted by user:</h3>
                        <UserDemands demands={demands} />
                    </div> : <p>No demands were posted yet!</p>}
                </div>
            </div>
        </div>
    );
};

export default Profile;

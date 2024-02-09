import { FormattedDate } from 'react-intl';
import { useUser } from '../../UserContext';
import './Profile.css';
import { Link } from 'react-router-dom';
import UserDemands from '../../components/Demands/UserDemands';

const Profile = () => {

    const [user] = useUser();
    const id = user.id;

    return (
        <div>

            <div className='profile_page'>
                <h2 className='profile_title'>User Profile:</h2>
                <div className="edit_buttons_container_profile">
                    <button className="edit_button edit_delete_btn edit_button_profile" /* onClick={testEditButton} */>
                        <Link to={"/users/edit/profile"}> ✏️ Edit profile</Link>
                    </button>
                </div>
                <div className='user_data_row'>
                    <div className='user_data'>
                        <img src={user.profile_picture ? 'http://localhost:8080/'+user.profile_picture : null} alt={`User ${user.username} profile mosaic`} />
                        <ul>
                            <li className='bold'>Username:</li>
                            <li className='separate'>{user.username}</li>
                            <li className='bold'>Created at:</li>
                            <li><FormattedDate value={user.created_at} day="2-digit" month="long" /></li>
                        </ul>
                    </div>

                    <div className='user_description'>
                        <h3>User bio:</h3>
                        <p>{user.biography}</p>
                    </div>
                </div>

                <div className='proposals_demands_row'>
                    <div className='left_column'>
                        <div>
                            <h3>Most voted proposals</h3>
                            {user.userProposals?.map(proposal => (
                                <div className='proposal_container' key={proposal.id}>
                                    <h3>{proposal.title}</h3>
                                    <p>Votes: {proposal.votes}</p>
                                    <p>Overall score: {proposal.avgVotes}</p>
                                </div>
                            ))}
                            {!user.userProposals && <p>No proposals were posted yet!</p>}
                        </div>
                    </div>
                    <div className='right_column'>
                        <h3>Demands posted by user:</h3>
                                <UserDemands/>
                        {!user.userDemands && <p>No demands were posted yet!</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

import { FormattedDate } from 'react-intl';
import { useUser } from '../../UserContext';
import Header from '../../components/Header/Header';
import './Profile.css';

const Profile = () => {

    const [user, setUser] = useUser();
    const userData = { ...user.data.data.user };

    return (
        <div>
            <Header />
            <div className='profile_page'>
                <h2 className='profile_title'>User Profile:</h2>
                <div className='user_data_row'>
                    <div className='user_data'>
                        <img src={userData.userProfileImg ?? null} alt={`User ${userData.username} profile mosaic`} />
                        <ul>
                            <li className='bold'>Username:</li>
                            <li className='separate'>{userData.username}</li>
                            <li className='bold'>Created at:</li>
                            <li><FormattedDate value={userData.created_at} day="2-digit" month="long" /></li>
                        </ul>
                    </div>

                    <div className='user_description'>
                        <h3>User bio:</h3>
                        <p>{userData.biography}</p>
                    </div>
                </div>

                <div className='proposals_demands_row'>
                    <div className='left_column'>
                        <div>
                            <h3>Most voted proposals</h3>
                            {userData.userProposals?.map(proposal => (
                                <div className='proposal_container' key={proposal.id}>
                                    <h3>{proposal.title}</h3>
                                    <p>Votes: {proposal.votes}</p>
                                    <p>Overall score: {proposal.avgVotes}</p>
                                </div>
                            ))}
                            {!userData.userProposals && <p>No proposals were posted yet!</p>}
                        </div>
                    </div>
                    <div className='right_column'>
                        <h3>Demands posted by user:</h3>
                        {userData.userDemands?.map(demand => (
                            <div className='demand_container' key={demand.id}>
                                <h3>{demand.title}</h3>
                                <p>{demand.description}</p>
                                <br />
                                <p>Active: {demand.is_active}</p>
                            </div>
                        ))}
                        {!userData.userDemands && <p>No demands were posted yet!</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

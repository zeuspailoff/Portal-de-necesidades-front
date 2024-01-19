import { FormattedDate } from 'react-intl';
import { useUser } from '../../UserContext';
import Header from '../../components/Header/Header';
//import { useDataUser } from '../../hooks/api';
import './Profile.css';

const Profile = () => {

    const [user, setUser] = useUser();
    // const { id } = user.data.data.user.id;
    // const [dataUser, setDataUser] = useDataUser({ id });
    //console.log(setUser)



    /* /////////////////////////////////////////////// */
    /* TEST DATA, PLEASE MAKE SURE TO DELETE AFTER USE */
    const userInfo = {
        username: 'Pablo',
        userBirthdate: '12/05/1995',
        userRegisteredAt: '01/01/2000',
        userProfileImg: '/shrek_whet.JPG',
        userDescription: 'I am a very good user whom likes gitiñoore'
    };
    /* TEST DATA, PLEASE MAKE SURE TO DELETE AFTER USE */
    /* /////////////////////////////////////////////// */


    const { username, userProfileImg } = userInfo;

    /* const [userDemands] = fetch(); // Query to fetch USER DEMANDS here */
    /* const [userProposals] = fetch(); // Query to fetch USER PROPOSALS here */

    /* /////////////////////////////////////////////// */
    /* TEST DATA, PLEASE MAKE SURE TO DELETE AFTER USE */
    const userProposals = [
        {
            id: 1,
            title: 'Proposal 1',
            votes: '5',
            avgVotes: '3.5'
        },
        {
            id: 2,
            title: 'Proposal 2',
            votes: '10',
            avgVotes: '7.66'
        }
    ];

    const userDemands = [
        {
            id: 1,
            title: 'Demand 1',
            description: 'This is my very very good demand #1',
            is_active: 'True'
        },
        {
            id: 2,
            title: 'Demand 2',
            description: 'Now, this is a demand but not as good as the last one',
            is_active: 'False'
        }
    ];
    /* TEST DATA, PLEASE MAKE SURE TO DELETE AFTER USE */
    /* /////////////////////////////////////////////// */

    return (
        <div>
            <Header />
            <div className='profile_page'>

                <div className='user_data_row'>
                    <div className='user_data'>
                        <img src={userProfileImg} alt={`User ${username} profile mosaic`} />
                        <ul>
                            <li>{user?.data.data.user.username}</li>
                            <li><FormattedDate value={user?.data.data.user.created_at} day="2-digit" month="long" /></li>

                        </ul>
                    </div>

                    <div className='user_description'>
                        <p>{user?.data.data.user.biography}</p>
                    </div>
                </div>

                <div className='proposals_demands_row'>
                    <div className='left_column'>
                        <div>
                            <h3>Most voted proposals</h3>
                            {userProposals.map(proposal => (
                                <div className='proposal_container' key={proposal.id}>
                                    <h3>{proposal.title}</h3>
                                    <p>Votes: {proposal.votes}</p>
                                    <p>Overall score: {proposal.avgVotes}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='right_column'>
                        {userDemands.map(demand => (
                            <div className='demand_container' key={demand.id}>
                                <h3>{demand.title}</h3>
                                <p>{demand.description}</p>
                                <br />
                                <p>{demand.is_active}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

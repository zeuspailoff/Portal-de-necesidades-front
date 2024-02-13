import { Link } from 'react-router-dom';
import './UserDemands.css'
const UserDemands = ({ demands }) => {
  const frontUrl = import.meta.env.VITE_FRONTEND_URL;
  return (
    <div>
      {demands && demands?.map((d) => (
        <div key={d.id} className="demand">
          <Link to={frontUrl + `demands/${d.id}`}> <p className="demand_title_in_card">{d.title}</p></Link>
        </div>
      ))}
    </div>
  )
}

export default UserDemands;
import { useState } from "react";
import { useUserList } from "../../hooks/api";
import "./UserList.css"
import { Link } from "react-router-dom";

const UserList = () => {
  const usersData = useUserList()
  const [users] = useState(usersData?.data?.users?.slice(0, 5))
  const apiUrl = import.meta.env.VITE_BACKEND_URL;

  return (
    <div className="userlist_container">
      <ul className="userList">
        {users.map(u => (
          <div className="single_user_info" key={u.id}>
            {u && u.profile_picture ? (
              <img className="avatarHome" src={`${apiUrl}${u.profile_picture.replace(/\\/g, '/')}`} alt={u.username} />
            ) : <img className="avatarHome" src={'https://w7.pngwing.com/pngs/77/140/png-transparent-training-needs-analysis-needs-assessment-needs-analysis-orange-logo-need.png'} alt={u.username} />}
            <Link to={`/profile/${u.id}`}> {u && u.username} </Link>
          </div>

        ))}
      </ul>
    </div>
  )
}

export default UserList;
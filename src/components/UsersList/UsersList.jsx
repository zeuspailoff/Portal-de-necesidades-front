import { useEffect, useState } from "react";
import { useUserList } from "../../hooks/api";

const UserList = () => {
  const usersData = useUserList()
  const [users] = useState(usersData.data.users)
  console.log(users);

    return (
        <>
            <ul>
              {users.map(u => (
                  <li key={u.id}>{u.username}</li>
                ))}
            </ul>
        </>
    )
}

export default UserList;
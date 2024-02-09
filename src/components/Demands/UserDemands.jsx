import { useState } from "react";
import { useUserActions } from "../../hooks/api";import { useParams } from "react-router-dom";



const UserDemands = () => {
    const id = useParams()
    const {userDemands} = useUserActions();
   const demands = userDemands(id)

    return (
      <div>
         { demands && demands?.map((d) => (
          <div key={d.id} className="demand">
            <p>{d.title}</p>
          </div>
        ))}
      </div>
    )
}

export default UserDemands;
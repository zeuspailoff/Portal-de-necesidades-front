import './UserDemands.css'
const UserDemands = ({demands}) => {
    return (
      <div>
         { demands && demands?.map((d) => (
          <div key={d.id} className="demand">
            <p className="demand_title_in_card">{d.title}</p>
          </div>
        ))}
      </div>
    )
}

export default UserDemands;
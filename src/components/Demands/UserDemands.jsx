
const UserDemands = ({demands}) => {
  console.log(demands);
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
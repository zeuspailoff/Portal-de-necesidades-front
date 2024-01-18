import { useState } from "react"
import { useDemandsAlls } from '../../hooks/api';

const Demand = () => {
  const demandsList = useDemandsAlls()
  const [demands, setDemands] = useState(demandsList)
  console.log(setDemands);


  return (
    <div>
      {demands.data.map(d =>
        <div key={d.id}>
          <h1 >{d.title}</h1>
          <p>{d.description}</p>
          <span>{d.is_closed === 1 ? '👌' : null}</span>
          <span>{d.files}</span>
        </div>
      )}
    </div>
  );
};

export default Demand;
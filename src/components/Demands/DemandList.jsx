import { useState } from "react"
import { useDemandsAlls } from '../../hooks/api';
import { Link } from "react-router-dom";

const DemandList = () => {
  const demandsList = useDemandsAlls()
  const [demands, setDemands] = useState(demandsList)
  console.log(setDemands);

  return (
    <div className="">
      {demands.data.map(d =>
        <div key={d.id}>
          <Link to={`/demands/${d.id}`}>
            {d.title}
          </Link>
          <p>{d.description}</p>
          <span>{d.is_closed === 1 ? '👌' : null}</span>
          <span>{d.files}</span>
        </div>
      )}
    </div>
  );
};

export default DemandList;
import { useState } from "react"
import { useDemandsAlls } from '../../hooks/api';
import { Link } from "react-router-dom";

const DemandList = ({ query }) => {
  const demandsList = useDemandsAlls(query)
  const [demands, setDemands] = useState(demandsList)
  console.log(setDemands);

  return (
    <div>
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
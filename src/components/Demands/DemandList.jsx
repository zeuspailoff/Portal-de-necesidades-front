import { useEffect, useState } from "react"
import { useDemandsAlls } from '../../hooks/api';
import { Link } from "react-router-dom";
import './DemandList.css';

const DemandList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [demandsPerPage] = useState(5)
  const demandsList = useDemandsAlls()
  const [demands, setDemands] = useState(demandsList)


  useEffect(() => {
    setDemands(demandsList);
  }, [demandsList]);

  const indexOfLastDemand = currentPage * demandsPerPage;
  const indexOfFirstDemand = indexOfLastDemand - demandsPerPage;
  const currentsDemands = demands.data.slice(indexOfFirstDemand, indexOfLastDemand)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const renderIcon = (category) => {
    return(
      category === 'Web Design' ? '🎨' :
      category === 'Translations' ? '🗨' :
      category === 'MovieMakers' ? '🎥' :
      category === 'Digital Marketing' ? '🌐' :
      category === 'Developing' ? '💻' : '❓'
    );
  }


  return (
    <div className="fetched_demands_container">
      {demands.data.map(d =>
        <div key={d.id} className="demand">
          <div className="demand_upper_row">
          <Link to={`/demands/${d.id}`}>
            {d.title}
          </Link>
          <span className="category">{renderIcon(d.category)}</span>
          </div>
          <p>{d.description}</p>
          <h3 className="is_closed">{d.is_closed == 1 ? 'Marked as closed 👌' : null}</h3>
          <h3>{d.files}</h3>
        </div>
      )}
      <div className="buttons_container">
        <button
          className="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastDemand >= demands.data.length}
        >
          Next
        </button>
      </div>
    </div>


  );
};

export default DemandList;
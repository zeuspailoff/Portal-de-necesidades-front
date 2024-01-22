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

    return category === 'Web Design' ? '🎨' :
      category === 'Translations' ? '🗨' :
        category === 'MovieMakers' ? '🎥' :
          category === 'Digital Marketing' ? '🌐' :
            category === 'Developing' ? '💻' :
              '❓';
  }


  return (
    <div >
      {demands.data.map(d =>
        <div key={d.id} className="demand">
          <Link to={`/demands/${d.id}`}>
            {d.title}
          </Link>
          <span className="category">{renderIcon(d.category)}</span>
          <p>{d.description}</p>
          <span>{d.is_closed === 1 ? '👌' : null}</span>
          <span>{d.files}</span>
        </div>
      )}
      <div>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastDemand >= demands.data.length}
        >
          Siguiente
        </button>
      </div>
    </div>


  );
};

export default DemandList;
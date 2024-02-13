import { useEffect, useState } from "react";
import { useDemandsAlls } from '../../hooks/api';
import { Link } from "react-router-dom";
import './DemandList.css';
import SearchBar from "../SearchBar/SearchBar";

const DemandList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [demandsPerPage] = useState(6);
  const demandsList = useDemandsAlls();
  const [filter, setFilter] = useState('');
  const [state, setState] = useState('');
  const [category, setCategory] = useState('');

  const indexOfLastDemand = currentPage * demandsPerPage;
  const indexOfFirstDemand = indexOfLastDemand - demandsPerPage;
  const currentsDemands = demandsList?.data?.slice(indexOfFirstDemand, indexOfLastDemand);

  // Utilizar currentsDemands directamente como estado
  const filteredDemands = () => {

    let result = currentsDemands;

    if (filter) {
      result = result.filter((demand) => demand.title.toLowerCase().includes(filter.toLowerCase()) || demand.description.toLowerCase().includes(filter.toLowerCase()) || demand.id == filter)
    }

    if (state) {
      result = result.filter((demand) => demand.is_closed == state)
    }
    if (category) {
      result = result.filter((demand) => demand.category == category)
    }

    if (result?.length == 0) { return null }

    return result;
  }
  const [demands, setDemands] = useState(filteredDemands() || []);

  useEffect(() => {
    setDemands(filteredDemands());
  }, [currentPage, demandsPerPage, demandsList.data, filter, state, category]);

  const handlePageChange = (pageChange) => {
    const newPage = currentPage + pageChange;
    setCurrentPage(newPage);
    const newIndexOfLastDemand = newPage * demandsPerPage;
    const newIndexOfFirstDemand = newIndexOfLastDemand - demandsPerPage;
    const newCurrentsDemands = demandsList.data ? demandsList.data.slice(newIndexOfFirstDemand, newIndexOfLastDemand) : [];

    // Utilizar newCurrentsDemands como nuevo estado
    setDemands(newCurrentsDemands);
  };



  const handleSearch = (e) => {
    setFilter(e.target.value);
  };

  const handleState = (e) => {
    setState(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };



  const renderIcon = (category) => {
    return (
      category === 'Web Design' ? '🎨' :
        category === 'Translations' ? '🗨' :
          category === 'MovieMakers' ? '🎥' :
            category === 'Digital Marketing' ? '🌐' :
              category === 'Developing' ? '💻' : '❓'
    );
  }

  return (
    <>
      {demands && <SearchBar handleState={handleState} handleSearch={handleSearch} handleCategory={handleCategory} />}
      <div className="fetched_demands_container">
        {demands ? demands.map((d) => (
          <div key={d.id} className="demand">
            <div className="demand_upper_row">
              <h2>#{d.id}</h2><Link to={`/demands/${d.id}`}>{d.title}</Link>
              <span className="category">{renderIcon(d.category)}</span>
            </div>
            <p>{d.description}</p>
            <h3 className="is_closed">{d.is_closed === 1 ? 'Closed ⛔​​​' : null}</h3>
            <h3>{d.files}</h3>
          </div> 
        )) : <p>'The page has no demands.' </p> }
        <div className="buttons_container">
          <button
            className="button"
            onClick={() => handlePageChange(-1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="button"
            onClick={() => handlePageChange(1)}
            disabled={indexOfLastDemand >= (demandsList.data?.length ?? 0)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default DemandList;

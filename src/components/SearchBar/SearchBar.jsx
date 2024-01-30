import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [estadoFilter, setEstadoFilter] = useState('');
  const [proposalsRange, setProposalsRange] = useState({ min: 0, max: 10 });
  const [puntuacionFilter, setPuntuacionFilter] = useState('');
  const [categoriaFilter, setCategory] = useState('');

  const handleSearch = () => {
    onSearch({
      searchTerm,
      estadoFilter,
      proposalsRange,
      puntuacionFilter,
      categoriaFilter,
    });
  };

  return (
    <div className='filters_container'>
      <h2>Browse among demands posted in iNeedUp</h2>

      <div>
        <div>
          <input
            className='search_demands'
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select className='states_filter' value={estadoFilter} onChange={(e) => setEstadoFilter(e.target.value)}>
            <option value="">All states</option>
            <option value="activo">Active</option>
            <option value="no activo">Inactive</option>
          </select>
        </div>

        <div className='range_container'>
          <label>Proposals range:</label>
          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={proposalsRange.min}
            onChange={(e) => setProposalsRange({ ...proposalsRange, min: parseInt(e.target.value, 10) })}
          />
          <span>{proposalsRange.min}</span>
        </div>

        <div className='score_container'>
          <label>Score ⭐</label>
          <input
            type="number"
            min="1"
            max="5"
            placeholder="1-5"
            value={puntuacionFilter}
            onChange={(e) => setPuntuacionFilter(e.target.value)}
          />
        </div>

        <div className='by_category_container'>
          <label>Category</label>
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="1">Web Design</option>
            <option value="2">Translations</option>
            <option value="3">Developing</option>
            <option value="4">MovieMakers</option>
            <option value="5">Digital Marketing</option>
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

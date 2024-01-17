import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [estadoFilter, setEstadoFilter] = useState('');
  const [proposalsRange, setProposalsRange] = useState({ min: 0, max: 10 });
  const [puntuacionFilter, setPuntuacionFilter] = useState('');
  const [categoriaFilter, setCategoriaFilter] = useState('');

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
    <div>
      <h2>Filters</h2>
      <aside>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={estadoFilter} onChange={(e) => setEstadoFilter(e.target.value)}>
          <option value="">All states</option>
          <option value="activo">Active</option>
          <option value="no activo">Inactive</option>
        </select>
        <div>
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
        <label>Score⭐</label>
        <input
          type="number"
          min="1"
          max="5"
          placeholder="1-5"
          value={puntuacionFilter}
          onChange={(e) => setPuntuacionFilter(e.target.value)}
        />
        <label>Category</label> {/* Luego se cambiaría por un select cuando tengamos los datos del back */}
        <input
          type="text"
          placeholder="Filter by category"
          value={categoriaFilter}
          onChange={(e) => setCategoriaFilter(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </aside>
    </div>
  );
};

export default SearchBar;
// Más tarde hacer los cambios necesarios para que se ajuste al back
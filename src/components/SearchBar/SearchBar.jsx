import './SearchBar.css';
 
const SearchBar = ({handleSearch, handleCategory, handleState }) => {
  return (
    <form className='filters_container'>
      <h2>Browse among demands posted in iNeedUp</h2>

      <div>
        <div>
          <input
            className='search_demands filter'
            type="text"
            placeholder="Search by title..."
            onChange={handleSearch}
          />
          <select className='states_filter filter' onChange={handleState}>
            <option value="">All states</option>
            <option value="1">Closed</option>
            <option value="0">Open</option>
          </select>
        </div>

        <div className='by_category_container filter'>
          <label>Category</label>
          <select onChange={handleCategory}>
            <option value="">All categories</option>
            <option value="Web Design">Web Design</option>
            <option value="Translations">Translations</option>
            <option value="Developing">Developing</option>
            <option value="MovieMakers">MovieMakers</option>
            <option value="Digital Marketing">Digital Marketing</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;

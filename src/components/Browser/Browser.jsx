import React, { useState } from 'react';
import './Browser.css'

const Browser = ({ onSearch }) => {
  const [browserBar, setbrowserBar] = useState('');

  const handleChange = (event) => {
    setbrowserBar(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(browserBar);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className='search_bar'
        type="text"
        placeholder="Explore iNeedUp!"
        value={browserBar}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Browser;

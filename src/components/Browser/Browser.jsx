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
    <div className='form_wrapper'>
    <form onSubmit={handleSubmit}>
      <input 
        className='search_bar'
        type="text"
        placeholder="Explore iNeedUp!"
        value={browserBar}
        onChange={handleChange}
      />
    </form>
      <button className='button' type="submit">Search</button>
    </div>
  );
};

export default Browser;

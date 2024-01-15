import React, { useState } from 'react';

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
        type="text"
        placeholder="Buscar..."
        value={browserBar}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Browser;

import React from 'react';
import { Link } from 'react-router-dom';
import './FloatingButton.css';

const FloatingButton = () => {
  return (
    <div className="floating_button_container">
      <Link to="/demands/new">
        <button className="floating-button">Create demand!</button>
      </Link>
    </div>
  );
};

export default FloatingButton;

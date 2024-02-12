import { useState, useEffect } from "react";
import { useUserActions } from "../../hooks/api";
import './Rating.css';

const Rating = ({ proposal_id, currentValue }) => {
  const [newValue, setNewValue] = useState(currentValue);
  const { vote } = useUserActions()
  const [error, setError] = useState();


  const handleVote = async (e) => {
    const value = e.target.id
    const body = {
      value: value
    }
    const response = await vote(proposal_id, body)
    if (response.data.status == 200) {
      setNewValue(response.data.data.votes);
    } else {
      setError(response.data.error)
      console.log(error.data.error.message);
    }
  };

  const v = newValue || currentValue;

  return (
    <div className="ratings_wrapper">
      <div>
      <span className={"rating " + (newValue ? 'voted' : '')}>
        <span onClick={handleVote} id="1" className={v >= 1 ? 'active' : ''}>★</span>
        <span onClick={handleVote} id="2" className={v >= 2 ? 'active' : ''}>★</span>
        <span onClick={handleVote} id="3" className={v >= 3 ? 'active' : ''}>★</span>
        <span onClick={handleVote} id="4" className={v >= 4 ? 'active' : ''}>★</span>
        <span onClick={handleVote} id="5" className={v >= 5 ? 'active' : ''}>★</span>
      </span>
      </div>
      {error ? <h6 className="error_h6">{error.message}</h6> : null}
    </div>
  );
};

export default Rating;

import { useState } from "react";
import { useUserActions } from "../../hooks/api";

const Rating = ({ id, value }) => {
  const [newValue, setNewValue] = useState();
  const userActions = useUserActions();

  const handleVote = (value) => () => {
    console.log('Vote done, rated:' + value);
    userActions.vote(id, value)
      .then(res => {
        setNewValue(res.data.votesAvg);
      });
  };

  const v = newValue || value;

  return (
    <span className={"rating " + (newValue ? 'voted' : '')}>
      <span onClick={handleVote(1)} className={v >= 1 ? 'active' : ''}>★</span>
      <span onClick={handleVote(2)} className={v >= 2 ? 'active' : ''}>★</span>
      <span onClick={handleVote(3)} className={v >= 3 ? 'active' : ''}>★</span>
      <span onClick={handleVote(4)} className={v >= 4 ? 'active' : ''}>★</span>
      <span onClick={handleVote(5)} className={v >= 5 ? 'active' : ''}>★</span>
    </span>
  );
};

export default Rating;

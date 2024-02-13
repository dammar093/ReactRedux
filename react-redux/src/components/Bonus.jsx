import React from 'react';
import './Bonus.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../slices/bonusSlice';


const Bonus = () => {

  const amount = useSelector((state)=>state.account.amount)
  const dispatch = useDispatch();
  const points = useSelector((state)=>state.bonus.points)
  return (
    <div className='bonus'>
      <h2>Bonus component</h2>
      <p>Amount: {amount}</p>
      <p>Bonus: {points}</p>
      <button onClick={()=>dispatch(increment())}>Incement Bonus</button>
    </div>
  );
}

export default Bonus;
import React, { useState } from 'react';
import './Amount.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment ,decrement, incrementByAmount } from '../slices/accountSlice';

const Amount = () => {
  const [value ,setValue] = useState(0)
  const amount = useSelector((state)=>state.account.amount)
  const points = useSelector((state)=>state.bonus.points)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Amount component</h2>
      <p>Amount: {amount}</p>
      <p>Bonus: {points}</p>
      <button onClick={()=>dispatch(increment())}>Incement Amount</button>
      <button onClick={()=>dispatch(decrement())}>Decrement Amount</button>
      <input type="number" value={value} onChange={(e)=>setValue(Number(e.target.value))}  />
      <button onClick={()=>dispatch(incrementByAmount(value))}>Incerment By {value} Amount</button>
    </div>
  );
}

export default Amount;
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,incrementByAmount} from '../reducer/reward'


const Reward = () => {

 const value= useSelector((state)=>state.reward.value);
 const dispatch = useDispatch()
  return (

    <div>

      <p>Reward: {value}</p>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(incrementByAmount(5))}>increment by 5</button>
    </div>
  )
}

export default Reward
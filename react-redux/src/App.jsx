
import { useSelector } from 'react-redux'
import './App.css'
import Amount from './components/Amount'
import Bonus from './components/Bonus'
import Reward from './components/Reward';

function App() {
  const amount = useSelector((state)=>state.account.amount);
  const points = useSelector((state)=>state.bonus.points)
  return (
    <div className='App'>
       <h2>App component</h2>
       <p>Amoount: {amount}</p>
       <p>Bonus: {points}</p>
       <Amount/>
       <Bonus/>
       <Reward/>
    </div>
  )
}

export default App

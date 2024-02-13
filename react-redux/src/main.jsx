import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import accountReducer from './slices/accountSlice.js'
import { Provider } from 'react-redux'
import { configureStore} from '@reduxjs/toolkit'
import bonusSlice from './slices/bonusSlice.js'
import rewardReducer from './reducer/reward.js'

const store =configureStore({
 reducer:{
  account : accountReducer,
  bonus : bonusSlice,
  reward : rewardReducer
 }

})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)

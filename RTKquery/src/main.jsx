import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { adminApi } from './api/adminSlice.js'

const store = configureStore({
  reducer:{
     [adminApi.reducerPath] : adminApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(adminApi.middleware),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
)

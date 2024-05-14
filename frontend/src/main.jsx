import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/Store.js'
import {Provider } from "react-redux"
import { Toaster } from 'react-hot-toast'
import Translatore from './components/Translatore.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <Toaster position='center' reverseOrder={false} />
    <Translatore/>
    <App />
  </Provider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <p className='bg-gray-200 text-cyan-700 text-center text-xl font-semibold justify-center'>Recommended to view in Desktop Mode!!</p>
    <App />
  </React.StrictMode>,
)

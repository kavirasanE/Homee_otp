import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import DataProvider from './context/DataProvider'
import Favourites from './pages/Favourites'
import Page from './components/Page'
const App = () => {
  return (
   <>
    <BrowserRouter>
     
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/fav' element={<Favourites/>}/>
        <Route path='/page' element={<Page/>}/>
      </Routes>
     
    </BrowserRouter>
   </>
  )
}

export default App
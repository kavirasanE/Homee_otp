import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import Home from './pages/Home'
import DataProvider from './context/DataProvider'
import Favourites from './pages/Favourites'
import Page from './components/Page'
import OurFounder from './pages/OurFounder'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
   <>
    <BrowserRouter>
    <div className='bg-blue-200 flex justify-between items-center font-bold px-10 py-3'>
      <p>24/7 Prayer HelpLine : 3874973649 email:Charity@gamil.com</p>
      <p className='flex gap-2'>
      <span>Language</span>
        <span>Subscribe</span>
      </p>
    </div>
    <div>
        <Navbar/>
    </div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/fav' element={<Favourites/>}/>
        <Route path='/page' element={<Page/>}/>
        <Route path='/founder' element={<OurFounder/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  )
}

export default App
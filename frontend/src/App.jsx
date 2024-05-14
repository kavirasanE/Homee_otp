import React ,{useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import DataProvider from './context/DataProvider'
import Favourites from './pages/Favourites'
import Page from './components/Page'
import OurFounder from './pages/OurFounder'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MeetWriter from './pages/MeetWriter'
import TrustActivities from './pages/TrustActivities'
import ChruchActivities from './pages/ChruchActivities'
import ChildrenHome from './pages/ChildrenHome'
import { FaWhatsapp } from "react-icons/fa6";
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <a className='fixed  bottom-5 right-5 z-50' href='whatsapp://send?phone=7397228076'>
          <FaWhatsapp  size={50} className=' bg-green-500 text-white rounded-lg'/>
        </a>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fav' element={<Favourites />} />
          <Route path='/page' element={<Page />} />
          <Route path='/founder' element={<OurFounder />} />
          <Route path='/meetwriter' element={<MeetWriter />} />
          <Route path='/TrustActivities' element={<TrustActivities />} />
          <Route path='/chruchActivites' element={<ChruchActivities />} />
          <Route path='/Childrenshome' element={<ChildrenHome />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
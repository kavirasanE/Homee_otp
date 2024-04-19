import React from 'react'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
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
const App = () => {
  return (
   <>
    <BrowserRouter>
    <div className='bg-blue-200 flex lg:flex-row flex-col lg:justify-between lg:items-center font-bold px-2 lg:px-10 py-3'>
      <p>24/7 Prayer HelpLine : 3874973649 <span className='lg:px-4'> Email:Charity@gamil.com</span></p>
      <p className='flex gap-2 pt-2'>
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
        <Route path='/meetwriter' element={<MeetWriter/>}/>
        <Route path='/TrustActivities' element={<TrustActivities/>}/>
        <Route path='/chruchActivites' element={<ChruchActivities/>}/>
        <Route path='/Childrenshome' element={<ChildrenHome/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  )
}

export default App
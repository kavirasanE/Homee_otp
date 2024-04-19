import React from 'react'
import Marquee from "react-fast-marquee";
import charity  from '../assets/charity.jpg'
const Marquees = () => {
  return (
    <div>
    <Marquee pauseOnHover pauseOnClick>
    <img src={charity} className='w-60 h-60 mx-6'/>
    <img src={charity} className='w-60 h-60 mx-6'/>
    <img src={charity} className='w-60 h-60 mx-6'/>
    <img src={charity} className='w-60 h-60 mx-6'/>
    <img src={charity} className='w-60 h-60 mx-6'/>
    <img src={charity} className='w-60 h-60 mx-6'/>
   
  </Marquee>
    </div>
  )
}

export default Marquees
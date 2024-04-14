import React, { useEffect, useState } from 'react'
import charity from "../assets/charity.jpg"
import charity1 from "../assets/charity1.jpg"
import charity2 from "../assets/charity2.jpg"
import { SlArrowLeft } from "react-icons/sl";
const ImageSlider = () => {
    const [imagehover, setImageHover] = useState(false)
    const [count, setCount] = useState(0)
    const imageSlider = [
        {
            "id": 1,
            "url": charity
        },
        {
            "id": 2,
            "url":charity1
        },
        {
            "id": 3,
            "url":charity2
        },

    ]
    const handlePrev = () => {
        if(count == 0) {
            setCount(imageSlider.length-1);   
        }else{

            setCount(count - 1)
        }
    }
    const handleNext = () => {
  if(count === imageSlider.length-1) {
    setCount(0)
  }
  else{
    setCount(count+1)
  }
    }
    useEffect(() => {
       const interval =  setInterval(() => {
            if(count < imageSlider.length-1){

                setCount(count+1)
            }else{
                setCount(0)
            }
        },5000)
        return () => clearInterval(interval)
    })
    return (
        <div>
            {imagehover &&
                <div onMouseEnter={() => { setImageHover(true) }}>
                    <SlArrowLeft size={50} className='absolute 
    p-2 top-1/2 left-5 cursor-pointer bg-white rounded-full ' onClick={handlePrev} />
                    <SlArrowLeft size={50} className='rotate-180  absolute
    p-2 top-1/2  right-5 cursor-pointer bg-white rounded-full' onClick={handleNext}/>
                </div>
            }
            <img src={imageSlider[count].url} alt='cjharity' className={`w-full h-80 transition-x-0 duration-600 ease-linear  `}
                onMouseEnter={() => setImageHover(true)}
                onMouseLeave={() => setImageHover(false)}
            />


        </div>
    )
}

export default ImageSlider
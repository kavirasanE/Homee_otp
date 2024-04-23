import React, { useEffect, useState } from 'react'
import charity from "../assets/charity.jpg"
import charity1 from "../assets/charity1.jpg"
import charity2 from "../assets/charity2.jpg"
import { SlArrowLeft } from "react-icons/sl";
import ta1 from "../assets/TrustActivities/ta1.png";
import ta2 from "../assets/TrustActivities/ta2.png";
import ta3 from "../assets/TrustActivities/ta3.png";
import ta4 from "../assets/TrustActivities/ta4.png";
import ta5 from "../assets/TrustActivities/ta5.png";
import ta6 from "../assets/TrustActivities/ta6.png";
import ta7 from "../assets/TrustActivities/ta7.png";
import ta8 from "../assets/TrustActivities/ta8.png";
import ta9 from "../assets/TrustActivities/ta9.png";
import ta10 from "../assets/TrustActivities/ta10.png";
import ta11 from "../assets/TrustActivities/ta11.png";
import ta12 from "../assets/TrustActivities/ta12.png";
const ImageSlider = () => {
    const [imagehover, setImageHover] = useState(false)
    const [count, setCount] = useState(0)
    // const imageSlider = [
    //     {
    //         "id": 1,
    //         "url": charity
    //     },
    //     {
    //         "id": 2,
    //         "url": charity1
    //     },
    //     {
    //         "id": 3,
    //         "url": charity2
    //     },

    // ]
    const imageSlider = [
        ta1,
        ta2,
        ta3,
        ta4,
        ta5,
        ta6,
        ta7,
        ta8,
        ta9,
        ta10,
        ta11,
        ta12
    ];
    const handlePrev = () => {
        if (count == 0) {
            setCount(imageSlider.length - 1);
        } else {

            setCount(count - 1)
        }
    }
    const handleNext = () => {
        if (count === imageSlider.length - 1) {
            setCount(0)
        }
        else {
            setCount(count + 1)
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            if (count < imageSlider.length - 1) {

                setCount(count + 1)
            } else {
                setCount(0)
            }
        }, 5000)
        return () => clearInterval(interval)
    });


    return (
        <div>
         
            <img src={imageSlider[count]} alt='cjharity' className={`w-full h-[400px] object-cover transition-x-0 duration-600 ease-linear  `}
                onMouseEnter={() => setImageHover(true)}
                onMouseLeave={() => setImageHover(false)}
            // onClick={() => setImageHover(!imagehover)}

            />
            {imagehover &&
                <div onMouseEnter={() => { setImageHover(true) }} onClick={() => setImageHover(!imagehover)} >
                    <SlArrowLeft size={40} className='absolute 
    p-2 top-[350px] left-5 cursor-pointer bg-white/30 rounded-full ' onClick={handlePrev} />
                    <SlArrowLeft size={40} className='rotate-180  absolute
    p-2 top-[350px]  right-5 cursor-pointer bg-white/30 rounded-full' onClick={handleNext} />
                </div>
            }

        </div>
    )
}

export default ImageSlider
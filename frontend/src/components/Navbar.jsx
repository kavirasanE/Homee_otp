import React, { useContext, useEffect, useReducer, useState } from 'react'
import logo from '../assets/logo.png'
import { LiaCrossSolid } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useSearchParams } from 'react-router-dom';
import { DataContext } from '../context/DataProvider';
import FavouriteReducer, { InitialState } from '../store/FavouriteReducer';
import { useSelector } from 'react-redux';
import emailjs from "@emailjs/browser";
import ContactUsModal from './ContactUsModal';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  // const { magazineId } = useContext(DataContext);
  const [state, dispatch] = useReducer(FavouriteReducer, InitialState);
  const counter = useSelector((state) => state.favourites.value)
  useEffect(() => {
    counter
  }, [counter])

  const [openmenu, setOpenmenu] = useState(false);
  const [openAboutmenu, setOpenAboutmenu] = useState(false);
  const [openMinsteries, setOpenMinsteries] = useState(false)
  const [openContact, setOpenContact] = useState(false);
  const [openHamburgerMenu,setOpenHamburgerMenu]=useState(true)


  const handlechange = () => {
    dispatch({ type: "add" })
  }
  return (
    <>

     <div className='hidden p-3 lg:flex flex-row  justify-between items-center bg-gray-200 '>
        <Link>
          <img src={logo} className='w-40 h-20' />
        </Link>
        <div className='flex flex-row  justify-between items-center gap-4 px-10 font-semibold text-xl'>
          <p className='border-r-2 border-black/50 px-2 cursor-pointer flex items-center' onMouseEnter={() => setOpenmenu(!openmenu)} onMouseLeave={() => setOpenmenu(!openmenu)}><span>Watch</span>
            <RiArrowDropDownLine size={30}
              className={` ${openmenu ? "rotate-180 transition-transform duration-500 ease-in-out"
                : "rotate-360 transition-transform duration-500 ease-in-out"}`} /></p>
          <p className='border-r-2 border-black/50 pr-4 cursor-pointer flex items-center'>Testimonies
          </p>
          <p className='border-r-2 border-black/50 pr-2 cursor-pointer flex items-center'>Aruputha Manna</p>
          <p className='border-r-2 border-black/50 px-2 cursor-pointer flex items-center'
            onMouseEnter={() => setOpenAboutmenu(true)}
            onMouseLeave={() => setOpenAboutmenu(false)}>About Us <RiArrowDropDownLine size={30}
              className={` ${openAboutmenu ? "rotate-180 transition-transform duration-500 ease-in-out"
                : "rotate-360 transition-transform duration-500 ease-in-out"}`} /></p>
          {openAboutmenu &&
            <div className='absolute  w-60 top-[115px] right-44  font-semibold text-xl 
             bg-gray-200 lg:flex flex-col justify-start items-center text-nowrap  pt-4'
              onMouseEnter={() => setOpenAboutmenu(true)}
              onMouseLeave={() => setOpenAboutmenu(false)}>
              <button className='hover:border-b-2
           border-black/50 w-full p-2' onClick={()=>{setOpenContact(true)}}>Contact Us</button>
              <Link to="/founder" className='hover:border-b-2
           border-black/50 w-full text-center
            p-2'>Founder</Link>
              <Link  to="meetwriter" className='hover:border-b-2
           border-black/50 w-full text-center
           p-2 pb-4'>Meet the Writer</Link>
              <p className='hover:border-b-2
           border-black/50 w-full text-center
           p-2 pl-10 cursor-pointer flex justify-center items-center '
                onMouseEnter={() => setOpenMinsteries(true)}
                onMouseLeave={() => setOpenMinsteries(false)}> Our Ministiries
                <RiArrowDropDownLine size={30}
                  className={` ${openMinsteries ? "rotate-180 transition-transform duration-500 ease-in-out"
                    : "rotate-360 transition-transform duration-500 ease-in-out"}`} />
              </p>
              {openMinsteries &&
                <div className='flex flex-col  border-2 justify-center items-center'
                  onMouseEnter={() => setOpenMinsteries(true)}
                  onMouseLeave={() => setOpenMinsteries(false)}>
                  <Link  to="chruchActivites" className='hover:border-b-2
           border-black/50 w-60 text-center py-2 cursor-pointer'>Chruch Activities</Link>
                  <Link to="TrustActivities" className='hover:border-b-2
           border-black/50 w-full text-center cursor-pointer py-2' >Trust Activities</Link>
                  <Link to="Childrenshome" className='hover:border-b-2
           border-black/50 w-full text-center cursor-pointer py-2' >Children's Home</Link>
                </div>
              }

            </div>
          }
          {counter > 0 &&
            <p className='absolute right-40 z-10 mb-10 bg-white rounded-full px-2 p-0.5 text-center text-sm font-bold '>{counter}</p>
          }
          <Link title="Bookmarks" className='pr-4' to="/fav">
            <LiaCrossSolid size={20} className=' rounded-full  w-10 h-10  cursor-pointer hover:scale-90 duration-150 translate-x-2 transition-transform ease-in-out' />
          </Link>
          <button className='bg-rose-600 text-white subpixel-antialiased px-6 p-1 rounded-md'>GIVE</button>
        </div>

      </div> 

      <div className='lg:hidden font-semibold z-50'>
        <div className='flex justify-between items-center p-2 md:px-10 '>
        <Link to="/" >
          <img src={logo} className='w-30 h-10'/>
        </Link>
         {openHamburgerMenu ? <GiHamburgerMenu className='text-xl' onClick={() => setOpenHamburgerMenu(false)}/> : 
          <IoCloseSharp  className='text-xl' onClick={() => setOpenHamburgerMenu(true)}/> }
        </div>
        {!openHamburgerMenu && 
          <div className='flex flex-col  items-center gap-4 transition-transform duration-500 p-5  rounded-md'>
            <p className='flex justify-center items-center' onClick={() => setOpenmenu(!openmenu)} >
        
              <span>Watch</span>
              <RiArrowDropDownLine size={30} className={` ${openmenu ? "rotate-180 transition-transform duration-500 ease-in-out" : "rotate-360 transition-transform duration-500 ease-in-out"}`} />
            </p>
            <p onClick={() => setOpenHamburgerMenu(true)}>Testimonies</p>
            <p onClick={() => setOpenHamburgerMenu(true)}>Aruputha Manna</p>
            <p onClick={() => setOpenAboutmenu(!openAboutmenu)} className='flex justify-center items-center' >
              About Us
              <RiArrowDropDownLine size={30} className={` ${openAboutmenu ? "rotate-180 transition-transform duration-500 ease-in-out" : "rotate-360 transition-transform duration-500 ease-in-out"}`} />
            </p>
            {openAboutmenu &&
              <div className='flex flex-col gap-4 justify-center items-center'>
                <button onClick={() => { setOpenContact(true); setOpenHamburgerMenu(true)}}>Contact Us</button>
                <Link to="/founder" onClick={() => setOpenHamburgerMenu(true)}>Founder</Link>
                <Link to="meetwriter" onClick={() => setOpenHamburgerMenu(true)}>Meet the Writer</Link>
                <p onClick={() =>{ setOpenMinsteries(!openMinsteries)}} className='flex  justify-center items-center'>
                  Our Ministiries
                  <RiArrowDropDownLine size={30} className={` ${openMinsteries ? "rotate-180 transition-transform duration-500 ease-in-out" : "rotate-360 transition-transform duration-500 ease-in-out"}`} />
                </p>
                {openMinsteries &&
                  <div  className='flex flex-col gap-4 justify-center items-center'>
                    <Link to="chruchActivites" onClick={() => setOpenHamburgerMenu(true)}>Chruch Activities</Link>
                    <Link to="TrustActivities" onClick={() => setOpenHamburgerMenu(true)}>Trust Activities</Link>
                    <Link to="Childrenshome" onClick={() => setOpenHamburgerMenu(true)}>Children's Home</Link>
                  </div>
                }
              </div>
            }
            {counter > 0 &&
              <p>{counter}</p>
            }
            <Link title="Bookmarks" to="/fav">
              <LiaCrossSolid size={40} />
            </Link>
            <button className='bg-rose-600 text-white subpixel-antialiased px-10 p-1 rounded-md font-semibold'>GIVE</button>
          </div>
        }
      </div>


      {openContact &&
        <div className='absolute top-0 bg-black/40 w-screen'>
          <ContactUsModal setOpenContact={setOpenContact} />
        </div>
      }

    </>
  )
}

export default Navbar


// Testimonies  ==  month wise

// Read == daily passage

// About -- Countact us , Founder,  Ministiries -- chruch , trust , Childrens Home, Meet the writer  

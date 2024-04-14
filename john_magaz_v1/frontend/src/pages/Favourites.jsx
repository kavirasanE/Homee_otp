import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { DataContext } from '../context/DataProvider'
// import Magazine_Card from '../components/Magazine_Card';
import Navbar from "../components/Navbar"
import { useSelector } from 'react-redux'
import { selectedFavourites } from '../redux/FavouriteSlice'
import Magazine_Card from '../components/Magazine_Card'
const Favourites = () => {
    // const { contextData, magazineId } = useContext(DataContext);

    const favourite = useSelector(selectedFavourites);

     console.log(favourite)
     useEffect(() => {
        favourite
     },[])
    return (
        <div>
            <Navbar/>
            <div>
                <Link className='' to='/'>Back </Link>
               
            </div>
            <div className='grid grid-cols-3'>
            {favourite.map((datas,index) => (
                    <Magazine_Card datas={datas} index={index} />
              
               ))}
            </div>
            {/* {magazineId.map((mag) => (
                    mag.id === contextData.id 
            ))
            }
            <div className='grid grid-cols-3  justify-center items-center'>
            {contextData.map((datas,index) => (
                magazineId.some((idObj) => idObj.id === datas.id) &&
                    <Magazine_Card datas ={datas} index ={index}/>
               
            ))}
               
            </div> */}
            

        </div>
    )
}

export default Favourites
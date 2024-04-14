import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataProvider'
import Magazine_Card from '../components/Magazine_Card';
import Navbar from "../components/Navbar"
const Favourites = () => {
    const { contextData, magazineId } = useContext(DataContext);

    return (
        <div>
            <Navbar/>
            <div>
                <Link className='' to='/'>Back </Link>
            </div>
            {/* {magazineId.map((mag) => (
                    mag.id === contextData.id 
            ))
            } */}
            <div className='grid grid-cols-3  justify-center items-center'>
            {contextData.map((datas,index) => (
                magazineId.some((idObj) => idObj.id === datas.id) &&
                    <Magazine_Card datas ={datas} index ={index}/>
               
            ))}
            </div>

        </div>
    )
}

export default Favourites
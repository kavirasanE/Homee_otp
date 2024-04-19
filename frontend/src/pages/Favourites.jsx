import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { DataContext } from '../context/DataProvider'
// import Magazine_Card from '../components/Magazine_Card';
import Navbar from "../components/Navbar"
import { useSelector } from 'react-redux'
import { selectedFavourites } from '../redux/FavouriteSlice'
import Magazine_Card from '../components/Magazine_Card'
import Axios from "axios"
import env from "react-dotenv"
import useRazorpay from "react-razorpay";
const Favourites = () => {
    // const { contextData, magazineId } = useContext(DataContext);
    const favourite = useSelector(selectedFavourites);
    const [Razorpay] = useRazorpay();
    console.log(favourite)
    useEffect(() => {
        favourite
    }, [])

    const handlePayment = async (e) => {

        const API_URL = 'http://localhost:3000';
        e.preventDefault();
        const orderUrl = `${API_URL}/order`;
        const response = await Axios.get(orderUrl);
        const { data } = response;

        const options = {
            key: "rzp_test_aIGcS929AXCx85",
            name: "Charity ",
            description: "THanks",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const paymentId = response.razorpay_payment_id;
                    const url = `${API_URL}capture/${paymentId}`;
                    Axios.post(url, {})
                    console.log(captureResponse.data);
                }
                catch (err) {
                    console.log(err);
                }
            }
        };
        const rzpl = new window.Razorpay(options);
        rzpl.open();
    }





    return (
        <div>
            <div className='text-lg font-semibold p-3'>
                <Link className='' to='/'>Back </Link>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {favourite.map((datas, index) => (
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

            {/* <div>
                <button onClick={handlePayment} className='p-2 border-2 border-black '>check payment</button>
            </div> */}
        </div>
    )
}

export default Favourites
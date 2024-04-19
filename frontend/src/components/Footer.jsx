import React from 'react'
import logo from '../assets/logo.png';
const Footer = () => {
    return (
        <div className='bg-black text-white/70 flex lg:flex-row flex-col justify-between px-5 items-center py-5'>
            <div className='flex flex-col justify-center'>
                <p className='font-bold text-xl'>CONTACT INFORMATION</p>
                {/* <p className='flex flex-col py-5 justify-center items-center gap-2'>
                    <span className='font-semibold '>Mailing Address:</span>
                    <span>PO Box 3333</span>
                    <span>Colorado Springs, CO 80934</span>
                </p> */}
                <div className='flex flex-col py-5 lg:justify-start lg:items-start  items-center gap-2'>
                    <span className='font-bold text-xl'>Dr. T. Patricia Rathi Priya</span>
                    <span>W/o. (Late) Bro. R. Asokan</span>
                    <span>61-B, 34, Mowbray House,</span>
                    <span>Church Hill Road, Ooty</span>
                    <span>The Nilgiris - 643001</span>
                </div>

                {/* <p className=' flex flex-col justify-center items-center gap-2 '>
                    <span>Physical Address:</span>
                    <span>1 Innovation Way</span>
                    <span>Woodland Park, CO 80863</span>
                </p> */}
                {/* <p className='flex flex-col justify-center items-center gap-1'>
                    <span> Helpline: 719-635-1111</span>
                    <span>  Fax: 719-635-1777</span>
                    <span> Email: info@awmi.net</span>
                    <span>  Website: www.awmi.net</span>
                </p> */}
            </div>
            <div className='flex flex-col justify-between items-center lg:gap-10 gap-2'>
                <button>Subscribe to our Email</button>
                <img src={logo} alt='logo' className='h-12' />
                <button>The John Magazine</button>
            </div>
            <div className='flex flex-col gap-5 justify-center items-center py-2 px-5'>
                <p className='font-bold underline '>Useful Links</p>
                <p>About Us</p>
                <p>Contact Us</p>
            </div>
        </div>
    )
}

export default Footer
import { Outlet } from 'react-router';
import img from '../assets/img.jpg';
import React from 'react'
import SignIntoAdmin from '../components/SignIntoAdmin';

const SignIn = () => {
  
    return (
        <>
         <div className='flex'>
                <img src={img} alt='Homme Image' className='h-screen w-1/3' />
                <div className=' flex justify-center w-full'>
                    <SignIntoAdmin/>
                </div>
                <Outlet/>
            </div>
        </>
    )
}

export default SignIn
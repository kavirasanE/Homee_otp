import React, { useCallback, useState } from 'react'
import {Link, Outlet} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const SignIntoAdmin = () => {
    const [mobilenumber, setMobilenumber] = useState(null)
    const [otp, setOtp] = useState()
    const [sucess, setSucess] = useState(false);
    const navigate = useNavigate();
    function handleLogin () {
        axios.post('http://localhost:9000/otp',{ otp:otp , IP: "122.165.67.11"})
        .then((response) => {
            console.log(response.data);
            if (response.data.message == "OTP verified successfully") {
                navigate("/homee");
            } else {
                console.log("OTP verification failed");
                alert("Invalid OTP")
            }
        })
        .catch(err => {
            console.log("post nor worked");
            alert("Invalid OTP")
            
        });
       

    }
   const handleMobileNumber = useCallback(() => {
    let numbertoString = mobilenumber.toString();
       
        if(mobilenumber === null ){
            alert("Enter a valid 10 digit mobile number starting with 9 or 7.");
        }
          
        if (mobilenumber.length !== 10 || isNaN(Number(mobilenumber)) || (numbertoString.charAt(0) !== '9' && numbertoString.charAt(0) !== '7')) {
            alert("Enter a valid 10 digit mobile number starting with 9 or 7.");
        }else{

            if(mobilenumber.length === 10  ){
                setSucess(true);
            }
        }
       
   },[mobilenumber])
   console.log(mobilenumber)
    return (
        <div className='flex flex-col w-1/2 justify-center '>
            <p className='text-4xl text-nowrap font-extrabold p-5'>Sign in to <span className='text-rose-500'>Admin</span></p>
            <div className='flex flex-col  py-4 '>
                <label className=''> <span className='text-rose-500 font-bold'>*</span> Mobile Number</label>
                <input type="mobile" id="mobile" name="mobile" pattern="[0-9]{10}" maxlength="10" required
                value={mobilenumber}  onChange={(e) => setMobilenumber(e.target.value)} placeholder='+91' 
                className='outline-none border-2 border-gray-300 p-2 ' />
            </div>
            {sucess ?
                <div className='flex flex-col py-4'>
                    <label className=''><span className='text-rose-500 font-bold'>*</span> OTP</label>
                    <input type='text' pattern="[0-9]{10}" maxlength="4" required value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter the OTP" className=' outline-none border-2 border-gray-300 p-2' />
                    <div className='p-4 pt-10'>
                    <button className='bg-purple-700 font-semibold p-2 text-white subpixel-antialiased px-10 rounded-md'  onClick={handleLogin}>LOGIN</button>
                    </div>
                </div>
                :
                <div className='p-4'>
                    <button className='bg-purple-700 font-semibold p-2 text-white subpixel-antialiased px-8 rounded-md' onClick={handleMobileNumber}>Send OTP</button>
                </div>
            }
           
        </div>
    )
}

export default SignIntoAdmin
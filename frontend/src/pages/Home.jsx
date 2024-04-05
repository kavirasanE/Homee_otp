import React from 'react'
import logo from "../assets/logo.jpg"
const Home = () => {
  return (
    <div>
    <div className='flex flex-row items-center justify-between'>
    <img src={logo} alt='logoImages' className='pr-20 pl-5'/>
        <div className='flex flex-row justify-center items-center gap-5'>
          <p>Home</p>
          <p>About us</p>
          <p>Home service </p>
          <p>career</p>
          <p>contact us</p>
        </div>
        <div className='px-4'>
          <button className="bg-gradient-to-r from-green-700 to-green-400 text-white rounded-xl p-2"> Download Our App</button>
        </div>
     </div>
     <div className='flex flex-col justify-center items-center py-10'>
      <p className='py-5 font-bold text-4xl '>About Homee</p>
      <p className='px-4 text-justify'>
      At HOMEE, we believe that everyone should have access to delicious and healthy meals, no matter how busy their schedule is. That's why we created an easy-to-use platform that connects busy individuals with top-rated chefs and restaurants in their area.
Our mission is to simplify the process of ordering food by offering a wide variety of dishes that cater to all dietary needs and preferences. From vegan and gluten-free options to classic comfort foods, our app has something for everyone.

We're passionate about supporting local businesses and connecting our users with the best food options in their community. Our user-friendly interface and streamlined ordering process make it easy for anyone to order and enjoy their favorite meals with just a few taps.
Join us on our mission to make delicious and healthy food accessible to all. Download HOMEE today and start exploring a world of flavors from the comfort of your own home.
      </p>
     </div>
    </div>
  )
}

export default Home
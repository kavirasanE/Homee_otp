import React from "react";
import HTMLFlipBook from "react-pageflip";
import logo from '../assets/logo.png'
// function MyBook(props) {
//   return (
//     <HTMLFlipBook width={300} height={500}>
//       <div className="demoPage">Page 1</div>
//       <div className="demoPage">Page 2</div>
//       <div className="demoPage">Page 3</div>
//       <div className="demoPage">Page 4</div>
//     </HTMLFlipBook>
//   );
// }
import charity from "../assets/charity.jpg"
import mag from '../assets/magazine.jpg'
const Page = () => {
return (
    <div>

    <HTMLFlipBook width={1000} height={1000}>
      <div  className="border-2 border-black"> page1
      <img src={logo} /></div>
      <div className="border-2 border-black">Page 2 
      <img src={charity}/></div>
      <div  className="border-2 border-black">Page 3
      <img src={mag}/></div>
      <div className="border-2 border-black">Page 4</div>
    </HTMLFlipBook>
    </div>
)
}

export default Page;
// import React, { useState } from 'react';

// import magazine from '../assets/magazine.jpg'
// const Page = () => {
//     // const [currentPage, setCurrentPage] = useState(1);

//     // const handleClick = () => {
//     //   setCurrentPage(currentPage === 3 ? 1 : currentPage + 1);
//     // };

//   return (
//     <div className="relative w-72 h-96 perspective">
//     <div className={`absolute w-full h-full transition-transform transform-style-preserve-3d duration-500 rotate-x-${currentPage === 2 ? '180' : currentPage === 3 ? '360' : '0'}`}>
//       <div className="absolute w-full h-full bg-blue-500 front flex justify-center items-center">
//         <h1 className="text-white text-3xl">Page {currentPage}</h1>
//       </div>
//       <div className="absolute w-full h-full bg-green-500 back flex justify-center items-center rotate-y-180">
//         <img className="w-48 h-48" src={currentPage === 2 ? logo: magazine } alt={`Page ${currentPage}`} />
//       </div>
//       <div className="absolute w-full h-full bg-yellow-500 back flex justify-center items-center rotate-y-360">
//         <img className="w-48 h-48" src={currentPage === 3 ? magazine : logo} alt={`Page ${currentPage}`} />
//       </div>
//     </div>
//     <button className="absolute bottom-4 right-4 px-4 py-2 bg-gray-800 text-white rounded" onClick={handleClick}>
//       Next Page
//     </button>
//   </div>
//   );
// };

// export default Page;

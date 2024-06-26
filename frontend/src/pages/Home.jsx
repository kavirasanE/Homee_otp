import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Magazine_Card from "../components/Magazine_Card";
import Footer from "../components/Footer";
import { DataContext } from "../context/DataProvider";
import ImageSlider from "../components/ImageSlider";
import Marquee from "../components/Marquees";
import jan from "../assets/magazine/jan.jpg";
import feb from "../assets/magazine/feb.jpg";
import mar from "../assets/magazine/mar.jpg";
import apr from "../assets/magazine/apr.jpg";
import may from "../assets/magazine/may.jpg";
import june from "../assets/magazine/june.jpg";
const Home = () => {
  // const data = [
  //   {
  //     "id": 0,
  //     "Year": "2024",
  //     "Writer": "Priya Ashokan",
  //     "Title": "Arputha Deva Kirubai",
  //     "ReadPdf": "https://drive.google.com/file/d/1A4ISn4zzWNNFvSo2pyy1SJLyo26yw9Oc/view?usp=sharing",
  //     "Downloadpdf": "https://drive.google.com/file/d/1A4ISn4zzWNNFvSo2pyy1SJLyo26yw9Oc/view?usp=sharing",
  //     "Month": "April",
  //     "Poster": "Image Link",
  //     "color": false
  //   },
  //   {
  //     "id": "1",
  //     "Year": "2023",
  //     "Writer": "Petriciarathi Priya",
  //     "Title": "Exploring the Unknown",
  //     "ReadPdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Downloadpdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Month": "March",
  //     "Poster": "poster1",
  //     "color": false
  //   },
  //   {
  //     "id": "2",
  //     "Year": "2022",
  //     "Writer": "Petriciarathi Priya",
  //     "Title": "Journey to the Stars",
  //     "ReadPdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Downloadpdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Month": "May",
  //     "Poster": "poster2",
  //     "color": false
  //   },
  //   {
  //     "id": "3",
  //     "Year": "2021",
  //     "Writer": "Petriciarathi Priya",
  //     "Title": "The Power of Words",
  //     "ReadPdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Downloadpdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Month": "January",
  //     "Poster": "poster3"
  //   },
  //   {
  //     "id": "4",
  //     "Year": "2020",
  //     "Writer": "Petriciarathi Priya",
  //     "Title": "Into the Wild",
  //     "ReadPdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Downloadpdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Month": "August",
  //     "Poster": "poster4"
  //   },
  //   {
  //     "id": "5",
  //     "Year": "2019",
  //     "Writer": "Petriciarathi Priya",
  //     "Title": "The Science of Happiness",
  //     "ReadPdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Downloadpdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Month": "June",
  //     "Poster": "poster5"
  //   },
  //   {
  //     "id": "6",
  //     "Year": "2018",
  //     "Writer": "Petriciarathi Priya",
  //     "Title": "Beyond the Horizon",
  //     "ReadPdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Downloadpdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Month": "December",
  //     "Poster": "poster6"
  //   },
  //   {
  //     "id": "7",
  //     "Year": "2017",
  //     "Writer": "Petriciarathi Priya",
  //     "Title": "The Music of Life",
  //     "ReadPdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Downloadpdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Month": "October",
  //     "Poster": "poster7"
  //   },
  //   {
  //     "id": "8",
  //     "Year": "2016",
  //     "Writer": "Petriciarathi Priya",
  //     "Title": "Lost in Translation",
  //     "ReadPdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Downloadpdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Month": "February",
  //     "Poster": "poster8"
  //   },
  //   {
  //     "id": "9",
  //     "Year": "2015",
  //     "Writer": "Petriciarathi Priya",
  //     "Title": "The Art of Leadership",
  //     "ReadPdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Downloadpdf": "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
  //     "Month": "September",
  //     "Poster": "poster9"
  //   }
  // ]
  // console.log(data);
  //  const {setcontextData} =useContext(DataContext)

  //   const data = [
  // {
  //   "id": 0,
  //       "Year": "2024",
  //       "Writer": "Priya Ashokan",
  //       "Title": "Arputha Deva Kirubai",
  //       "ReadPdf": "https://drive.google.com/file/d/1d95PGiFDpoER2a4Zy4wxJA86VRnBvFS2/view?usp=sharing",
  //       "Downloadpdf": "https://drive.google.com/file/d/1d95PGiFDpoER2a4Zy4wxJA86VRnBvFS2/view?usp=sharing",
  //       "Month": "January",
  //       "Poster": "magazine frontpage photo "
  // },
  // {
  //  "id": 1,
  //       "Year": "2024",
  //       "Writer": "Priya Ashokan",
  //       "Title": "Arputha Deva Kirubai",
  //       "ReadPdf": "https://drive.google.com/file/d/1P4rRroBRTZDsP7TaB3hjV5hwl6Qa7rkr/view?usp=sharing",
  //       "Downloadpdf": "https://drive.google.com/file/d/1P4rRroBRTZDsP7TaB3hjV5hwl6Qa7rkr/view?usp=sharing",
  //       "Month": "February",
  //       "Poster": "magazine frontpage photo "
  // },
  // {
  //  "id": 2,
  //       "Year": "2024",
  //       "Writer": "Priya Ashokan",
  //       "Title": "Arputha Deva Kirubai",
  //       "ReadPdf": "https://drive.google.com/file/d/1wLitb-u7aSNkua1wZN7UORsLgv0d4okx/view?usp=sharing",
  //       "Downloadpdf": "https://drive.google.com/file/d/1wLitb-u7aSNkua1wZN7UORsLgv0d4okx/view?usp=sharing",
  //       "Month": "March",
  //       "Poster": "magazin frontpage photo "
  // },
  // {
  // "id": 3,
  //       "Year": "2024",
  //       "Writer": "Priya Ashokan",
  //       "Title": "Arputha Deva Kirubai",
  //       "ReadPdf": "https://drive.google.com/file/d/1A4ISn4zzWNNFvSo2pyy1SJLyo26yw9Oc/view?usp=sharing",
  //       "Downloadpdf": "https://drive.google.com/file/d/1A4ISn4zzWNNFvSo2pyy1SJLyo26yw9Oc/view?usp=sharing",
  //       "Month": "April",
  //       "Poster": "Image Link"
  // }
  // ]



  const data = [
    {
      id: 0,
      Year: "2024",
      Writer: "Petricia Rathi Priya Ashokan",
      Title: "Arputha Deva Kirubai",
      ReadPdf:
        "https://drive.google.com/file/d/1d95PGiFDpoER2a4Zy4wxJA86VRnBvFS2/view?usp=sharing",
      Downloadpdf:
        "https://drive.google.com/file/d/1d95PGiFDpoER2a4Zy4wxJA86VRnBvFS2/view?usp=sharing",
      Month: "January",
      Poster: jan,
    },
    {
      id: 1,
      Year: "2024",
      Writer: "Petricia Rathi Priya Ashokan",
      Title: "Arputha Deva Kirubai",
      ReadPdf:
        "https://drive.google.com/file/d/1P4rRroBRTZDsP7TaB3hjV5hwl6Qa7rkr/view?usp=sharing",
      Downloadpdf:
        "https://drive.google.com/file/d/1P4rRroBRTZDsP7TaB3hjV5hwl6Qa7rkr/view?usp=sharing",
      Month: "February",
      Poster: feb,
    },
    {
      id: 2,
      Year: "2024",
      Writer: "Petricia Rathi Priya Ashokan",
      Title: "Arputha Deva Kirubai",
      ReadPdf:
        "https://drive.google.com/file/d/1wLitb-u7aSNkua1wZN7UORsLgv0d4okx/view?usp=sharing",
      Downloadpdf:
        "https://drive.google.com/file/d/1wLitb-u7aSNkua1wZN7UORsLgv0d4okx/view?usp=sharing",
      Month: "March",
      Poster: mar,
    },
    {
      id: 3,
      Year: "2024",
      Writer: "Petricia Rathi Priya Ashokan",
      Title: "Arputha Deva Kirubai",
      ReadPdf:
        "https://drive.google.com/file/d/1A4ISn4zzWNNFvSo2pyy1SJLyo26yw9Oc/view?usp=sharing",
      Downloadpdf:
        "https://drive.google.com/file/d/1A4ISn4zzWNNFvSo2pyy1SJLyo26yw9Oc/view?usp=sharing",
      Month: "April",
      Poster: apr,
    },
    {
      id: 4,
      Year: "2024",
      Writer: "Petricia Rathi Priya Ashokan",
      Title: "Arputha Deva Kirubai",
      ReadPdf:
        "https://drive.google.com/file/d/1YdJR1Lg3FlDa07CcfuuLG54KB51YgTGh/view?usp=drive_link",
      Downloadpdf:
        "https://drive.google.com/file/d/1YdJR1Lg3FlDa07CcfuuLG54KB51YgTGh/view?usp=drive_link",
      Month: "May",
      Poster: may,
    },
    {
      id: 5,
      Year: "2024",
      Writer: "Petricia Rathi Priya Ashokan",
      Title: "Arputha Deva Kirubai",
      ReadPdf:
        "https://drive.google.com/file/d/1sfhlXO8CtyiBzmg1rtxR1ubSg_fT4GHX/view?usp=sharing",
      Downloadpdf:
        "https://drive.google.com/file/d/1sfhlXO8CtyiBzmg1rtxR1ubSg_fT4GHX/view?usp=sharing",
      Month: "June",
      Poster: june,
    },
  ];
  
  const [magazineData, setMagazineData] = useState(data);

  // useEffect( =>(
  //
  // ),[])
  // useEffect(() => {
  //   setcontextData(data);
  // },[])
  return (
    <>
      <ImageSlider />
      <p className="italic flex flex-col justify-center items-center gap-4 py-4 font-semibold text-xl">
        {" "}
        <span className="font-bold text-2xl">Proverbs 19:17</span>
        "Whoever is kind to the poor lends to the LORD, and he will reward them
        for what they have done."
      </p>
      <p className="text-center font-bold">
        "ஏழைக்கு இரங்குகிறவன் கர்த்தருக்குக் கடன்கொடுக்கிறான்; அவன் கொடுத்ததை அவர் திரும்பக் கொடுப்பார்."
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {magazineData.map((datas, index) => (
          <Magazine_Card key={index} datas={datas} />
        ))}
      </div>
    </>
  );
};

export default Home;

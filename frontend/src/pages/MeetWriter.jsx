import React from "react";
import magazine from "../assets/magazine.jpg";
import Founder2 from "../assets/Founder2.png";
import { FaQuoteLeft } from "react-icons/fa";
const MeetWriter = () => {
  return (
    <div className="py-5">
      <div className="lg:mx-20 mx-2 p-5 rounded-2xl lg:pt-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <p className="lg:px-10  font-bold lg:text-6xl text-xl py-10 underline">
            MEET THE WRITER
          </p>
          <img src={Founder2} className="w-96 h-96 mb-5" />
        </div>
        <FaQuoteLeft className="lg:text-7xl text-4xl" />
        <p className="text-center md:text-justify lg:px-10 my-5 p-5 bg-red-200 lg:p-4 rounded-lg">
          <h1 className="font-bold text-lg my-2">About Priya Ashokan</h1>
          <span>
            Priya Ashokan is a distinguished Christian author, renowned for her
            insightful and spiritually enriching writings. Her work
            predominantly focuses on church life and Christian faith, making
            significant contributions to Christian literature and magazines.
          </span>
          <h1 className="font-bold text-lg my-2">Writing Journey</h1>
          <span>
            With a deep-rooted passion for Christ and His teachings, Priya's
            journey as a writer began with a desire to share the profound love
            and grace of God with the world. Over the years, her articles and
            stories have inspired countless believers, providing them with
            spiritual nourishment and encouragement.
          </span>
          <h1 className="font-bold text-lg my-2">
            Signature Work:
            <span className="text-purple-900"> "Arputha Deva Kirubai" </span>
          </h1>
          <span>
            Among her many contributions, "Arputha Deva Kirubai" stands out as a
            testament to her deep understanding of God's boundless mercy and
            love. Through this series, Priya delves into the miracles and
            blessings that manifest in the lives of those who walk in faith,
            offering readers a profound sense of hope and inspiration.
          </span>
          <h1 className="font-bold text-lg my-2">A Voice for the Faithful</h1>
          <span>
            Priya Ashokan's commitment to her faith and her community is evident
            in every piece she writes. Her work not only reflects her personal
            devotion but also serves as a beacon of light for those seeking to
            deepen their relationship with Christ.
          </span>
        </p>
      </div>
    </div>
  );
};

export default MeetWriter;

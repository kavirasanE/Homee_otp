import React from 'react'
import magazine from "../assets/magazine.jpg"
import Marquee from 'react-fast-marquee'
import Marquees from '../components/Marquees'
import ta1 from "../assets/TrustActivities/ta1.png";
import ta2 from "../assets/TrustActivities/ta2.png";
import ta3 from "../assets/TrustActivities/ta3.png";
import ta4 from "../assets/TrustActivities/ta4.png";
import ta5 from "../assets/TrustActivities/ta5.png";
import ta6 from "../assets/TrustActivities/ta6.png";
import ta7 from "../assets/TrustActivities/ta7.png";
import ta8 from "../assets/TrustActivities/ta8.png";
import ta9 from "../assets/TrustActivities/ta9.png";
import ta10 from "../assets/TrustActivities/ta10.png";
import ta11 from "../assets/TrustActivities/ta11.png";
import ta12 from "../assets/TrustActivities/ta12.png";
const TrustActivities = () => {
  const Trustactivities = [
    ta1,
    ta2,
    ta3,
    ta4,
    ta5,
    ta6,
    ta7,
    ta8,
    ta9,
    ta10,
    ta11,
    ta12
];

  return (
    <div>
        <div className='bg-slate-500 h-48 text-white'>
            <p className='text-4xl font-bold px-5 pt-20 text-start'>Our Trust Activities</p>
        </div>
        {/* <div className='flex justify-center py-5'>
        <img src={magazine} className='w-[800px] h-80 rounded-2xl'/>
        </div> */}
        <div class="p-5 text-justify">
    <p class="mb-4">
        <strong class="text-red-700">Grace Mission Trust</strong>, established by <strong class="text-red-700">Dr. R. Ashokan</strong>, embodies a profound commitment to serving the marginalized and vulnerable members of society. With a steadfast dedication to humanitarian principles, the Trust endeavours to alleviate the suffering of the underprivileged through multifaceted assistance programs.
    </p>
    <p class="mb-4">
        At the core of its mission, <strong class="text-red-700">Grace Mission Trust</strong> prioritizes the provision of essential necessities such as food, shelter, and support to those in need. Recognizing the fundamental right to dignity and well-being, the Trust operates with compassion and empathy, extending a helping hand to individuals and families facing adversity.
    </p>
    <p class="mb-4">
        Through strategic partnerships and community engagement initiatives, the Trust fosters collaborative efforts aimed at addressing systemic issues contributing to poverty and deprivation. By advocating for social justice and equality, it seeks to create sustainable solutions that empower individuals to break free from the cycle of poverty.
    </p>
    <p class="mb-4">
        Moreover, <strong class="text-red-700">Grace Mission Trust</strong> is committed to holistic development, recognizing the importance of education, healthcare, and skill-building initiatives in fostering long-term empowerment. By investing in education and vocational training programs, the Trust equips individuals with the tools and resources necessary to build a brighter future for themselves and their communities.
    </p>
    <p class="mb-4">
        Furthermore, the Trust operates with transparency, accountability, and integrity, ensuring that resources are utilized efficiently and effectively to maximize impact. By adhering to best practices in governance and management, it upholds the trust and confidence of its stakeholders, including donors, beneficiaries, and the wider community.
    </p>
    <p class="mb-4">
        Through its unwavering dedication to humanitarian service, <strong class="text-red-700">Grace Mission Trust</strong> continues to make a meaningful difference in the lives of the less fortunate, embodying the timeless values of compassion, empathy, and solidarity. Driven by the vision of <strong class="text-red-700">Dr. R. Ashokan</strong>, it remains steadfast in its commitment to creating a more inclusive and equitable society for all.
    </p>
</div>
<p className='text-3xl font-bold py-3 text-center underline'>Image Gallery</p>
        <Marquee pauseOnHover pauseOnClick className='py-5'>
      {Trustactivities.map((data) => (
          <Marquees data={data} />
      ))}
        </Marquee>
    </div>
  )
}

export default TrustActivities
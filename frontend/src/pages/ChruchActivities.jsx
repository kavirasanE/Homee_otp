import React from 'react'
import magazine from "../assets/magazine.jpg"
import Marquee from 'react-fast-marquee'
import Marquees from '../components/Marquees'
const ChruchActivities = () => {
  return (
    <div>
    <div className='bg-slate-500 h-48 text-white'>
        <p className='text-4xl font-bold px-5 pt-20 text-start'>Our Chruch Activities</p>
    </div>
    {/* <div className='flex justify-center py-5'>
    <img src={magazine} className='w-[800px] h-80 rounded-2xl'/>
    </div> */}
    <div className='p-5 text-justify'>
    In an orphanage, trust-building activities are not just routines; they form the foundation of a supportive community where children find solace and guidance. Creating a safe haven begins with nurturing relationships built on trust and understanding. Staff members dedicate themselves to fostering an environment where each child feels valued and heard. Through group activities, like playful games or collaborative projects, bonds are forged, teaching the importance of teamwork and empathy. Individual counseling sessions provide a confidential space for children to share their innermost thoughts and fears, nurturing a sense of security and belonging. Peer support groups offer solidarity, showing children they are not alone in their experiences. Life skills training equips them with the tools needed to navigate life's challenges confidently. Community involvement further strengthens this support network, instilling a sense of belonging and empowerment. Each achievement, no matter how small, is celebrated, reinforcing their self-esteem and resilience. In this atmosphere of openness and encouragement, children blossom, finding the courage to embrace their past while confidently stepping into their futures.
    </div>
    <div className='p-4'>

    <Marquees/>
    </div>
</div>
  )
}

export default ChruchActivities
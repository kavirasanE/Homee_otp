import React from 'react'
import magazine from "../assets/magazine.jpg"
import Marquee from 'react-fast-marquee'
import Marquees from '../components/Marquees'
import ch1 from '../assets/Childrenshome/ch1.png';
import ch2 from '../assets/Childrenshome/ch2.png';
import ch3 from '../assets/Childrenshome/ch3.png';
import ch4 from '../assets/Childrenshome/ch4.png';
import ch5 from '../assets/Childrenshome/ch5.png';
import ch6 from '../assets/Childrenshome/ch6.png';
import ch7 from '../assets/Childrenshome/ch7.png';

const ChildrenHome = () => {
  const Childrenshome =[ch1,ch2,ch3,ch4,ch5,ch6,ch7];
  return (
    <div>
    <div className='bg-slate-500 h-48 text-white'>
        <p className='text-4xl font-bold px-5 pt-20 text-start'>Children's Home</p>
    </div>
    {/* <div className='flex justify-center py-5'>
    <img src={magazine} className='w-[800px] h-80 rounded-2xl'/>
    </div> */}


    <p className='text-3xl font-bold py-3 text-center underline'>Image Gallery</p>
    <Marquee pauseOnHover pauseOnClick className='py-6'>
      {Childrenshome.map((data) => (
          <Marquees data={data} />

      ))}
        </Marquee>
    <div class='p-5 text-justify font-medium'>
    <p class="mb-4">
        <strong class="text-cyan-700 text-3xl font-bold ">New Life Children's Home</strong>, an integral part of <strong class="text-cyan-700">Grace Mission Trust</strong>, serves as a beacon of hope and support for orphaned children in need. With a deep-seated commitment to nurturing and empowering every child under its care, the home provides a holistic environment that fosters growth, development, and opportunity.
    </p>
    <p class="mb-4">
        Education lies at the heart of <strong class="text-cyan-700">New Life Children's Home</strong>'s mission, recognizing it as a powerful tool for breaking the cycle of poverty and creating pathways to a brighter future. Through comprehensive educational programs tailocyan to each child's needs and abilities, the home ensures access to quality schooling, tutoring, and skill-building activities. By investing in their intellectual development, the home equips these children with the knowledge and skills necessary to pursue their dreams and become self-reliant individuals.
    </p>
    <p class="mb-4">
        In addition to education, <strong class="text-cyan-700">New Life Children's Home</strong> addresses the basic needs of its residents, including food, clothing, and shelter. Nutritious meals are provided to ensure their physical well-being, while comfortable living quarters offer a safe and nurturing environment where they can thrive. Through the provision of clothing and personal care items, the home ensures that every child feels valued and respected, promoting a sense of dignity and self-esteem.
    </p>
    <p class="mb-4">
        Beyond meeting their immediate needs, <strong class="text-cyan-700">New Life Children's Home</strong> also offers emotional and psychological support to help children cope with the trauma of losing their families and navigate the challenges of growing up without parental guidance. Through counselling, mentorship, and recreational activities, the home creates a supportive community where children can heal, build resilience, and form meaningful connections with their peers and caregivers.
    </p>
    <p class="mb-4">
        Moreover, <strong class="text-cyan-700">New Life Children's Home</strong> recognizes the importance of preparing children for life beyond the confines of the home. To this end, the home provides vocational training and career guidance, equipping older children with the skills and knowledge necessary to pursue gainful employment and become independent adults. By instilling a sense of confidence and self-reliance, the home empowers these children to create a better future for themselves and break the cycle of poverty.
    </p>
    <p class="mb-4">
        In essence, <strong class="text-cyan-700">New Life Children's Home</strong> embodies the core values of <strong class="text-cyan-700">Grace Mission Trust</strong>, offering orphaned children not just a place to live, but a place to thrive. Through its comprehensive support programs and unwavering commitment to each child's well-being, the home ensures that every child has the opportunity to realize their full potential and lead a life of dignity, purpose, and fulfilment.
    </p>
</div>
     
</div>
  )
}

export default ChildrenHome


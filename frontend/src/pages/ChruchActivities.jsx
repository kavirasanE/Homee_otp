import React from 'react'
import magazine from "../assets/magazine.jpg"
import Marquee from 'react-fast-marquee'
import Marquees from '../components/Marquees'
import cm1 from '../assets/chruchMinistry/cm1.jpg'
import cm2 from '../assets/chruchMinistry/cm2.jpeg'
import cm3 from '../assets/chruchMinistry/cm3.jpeg'
const ChruchActivities = () => {
  // const chruchActivites = [
  //   {
  //     "id": 0,
  //     "image": cm1
  //   },
  //   {
  //     "id": 1,
  //     "image": cm2
  //   },
  //   {
  //     "id": 2,
  //     "image": cm3
  //   }

  // ]

  const chruchActivites =[cm1,cm2,cm3];

  return (
    <div>
      <div className='bg-slate-500 h-48 text-white'>
        <p className='text-4xl font-bold px-5 pt-20 text-start'>Our Chruch Activities</p>
      </div>
      {/* <div className='flex justify-center py-5'>
    <img src={magazine} className='w-[800px] h-80 rounded-2xl'/>
    </div> */}

    <p className='text-3xl font-bold py-3 text-center underline'>Image Gallery</p>
        <Marquee pauseOnHover pauseOnClick className='py-5'>
      {chruchActivites.map((data) => (
          <Marquees data={data} />

      ))}
        </Marquee>
    <div class="p-5 text-justify">
    <p class="mb-4">
        The <strong class="text-black-800 ">Church of Praise</strong>, founded under the inspired leadership of <strong class="text-red-800 text-xl ">Bishop Dr. R. Ashokan</strong>, serves as a beacon of spiritual solace, guiding countless individuals on their journey towards <strong class="text-black-800 ">God</strong>. With a profound commitment to spiritual enlightenment, <strong class="text-red-800 text-xl ">Bishop Dr. R. Ashokan</strong> established this sanctuary of faith to nurture souls and deepen their connection with the divine.
    </p>
    <p class="mb-4">
        Through uplifting worship services and insightful teachings rooted in the sacred scriptures, the <strong class="text-black-800 ">Church of Praise</strong> has become a transformative force in the lives of its members. Each gathering is infused with reverence and devotion, creating an atmosphere conducive to spiritual growth and renewal.
    </p>
    <p class="mb-4">
        <strong class="text-red-800 text-xl ">Bishop Dr. R. Ashokan</strong>'s profound understanding of the Bible and his unwavering faith have enabled him to impart timeless wisdom and guidance to his congregation. His sermons resonate with authenticity and compassion, offering practical insights to navigate life's challenges while remaining steadfast in one's faith.
    </p>
    <p class="mb-4">
        Moreover, the <strong class="text-black-800 ">Church of Praise</strong> serves as a community hub, fostering fellowship and support among its members. Through various outreach programs and compassionate initiatives, the church extends a helping hand to those in need, embodying the teachings of love and compassion taught by <strong class="text-black-800 ">Jesus Christ</strong>.
    </p>
    <p class="mb-4">
        The impact of the <strong class="text-black-800 ">Church of Praise</strong> extends far beyond its physical walls, touching the hearts and lives of individuals from all walks of life. It stands as a testament to <strong class="text-red-800 text-xl ">Bishop Dr. R. Ashokan</strong>'s vision and dedication, offering hope, guidance, and spiritual renewal to all who seek solace in its embrace.
    </p>
</div>

    </div>
  )
}

export default ChruchActivities
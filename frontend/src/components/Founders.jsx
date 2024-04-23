import React, { useEffect, useRef, useState } from 'react'
import Founder1 from "../assets/Founder1.png"
import Founder2 from "../assets/Founder2.png"
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/FavouriteSlice'
import emailjs from "@emailjs/browser";
import { current } from '@reduxjs/toolkit';

const Founders = () => {

    // const count = useSelector((state) => state.favourites.value);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     console.log(count);
    // },[count])
    const [loading, setLoading] = useState(false)

    const emailRef = useRef();
    const nameRef = useRef();
    const messageREf = useRef();
    useEffect(() => {
        emailjs.init("vjazUY8mUI25kTAFy"), [];
    })
    const handlesub = async () => {
        const serviceID = "service_auo3u9i";
        const templeteID = "template_paoef4c";
        try {
            setLoading(true);
            await emailjs.send(serviceID, templeteID, {
                name: nameRef.current.value,
                recipient: emailRef.current.value,
                message: messageREf.current.value
            });
            alert("email sent suceessfully")
        }
        catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    // from_name: "kavi",
    // message: "hello",
    // reply_to: "john",
    // name: "kavirasan",
    // recipient: "mmoo",
    return (
        <div>

            <p className='font-bold text-4xl text-center pt-5 lg:pt-20 underline'>Our Founders</p>

            <div className='flex lg:flex-row flex-col py-2 justify-center items-center'>

                <img src={Founder1} className='w-1/2 lg:p-20' />
                <div className='py-10 text-justify lg:pr-10 px-2 flex flex-col gap-4'>
                    <p>In the heart of a bustling community, amidst the echoes of hymns and prayers, stands a figure whose presence embodies the very essence of faith and resilience – the founder of a cherished church. Revered by many and known for his unwavering commitment to serving both God and humanity, the founder's journey is a testament to the transformative power of belief and dedication.</p>

                    <p>Born into humble beginnings, the founder's early years were marked by adversity and hardship. Yet, even in the face of adversity, his unwavering faith remained steadfast. It was this faith that guided him through the darkest of times, instilling in him a profound sense of purpose and calling.</p>

                    <p>As he matured, the founder's passion for spirituality blossomed, leading him to embark on a journey of self-discovery and enlightenment. Through prayer, study, and reflection, he found solace in the teachings of the Bible, drawing inspiration from the stories of prophets and disciples who had walked before him.</p>


                </div>
            </div>
            <div className='flex lg:flex-row-reverse flex-col py-2 justify-center items-center'>
                <img src={Founder2} className='w-1/2 lg:p-20' />
                <div className='py-10 text-justify lg:pl-10 px-2 flex flex-col gap-4'>
                    <p>Fuelled by a burning desire to spread the message of love and redemption, the founder embarked on a mission to establish a place of worship – a sanctuary where believers could gather to seek solace, find community, and nurture their spiritual growth. With unwavering determination and a vision that transcended boundaries, he laid the foundation for what would become a beacon of hope in the hearts of many.</p>

                    <p>Guided by his steadfast belief in the power of unity and compassion, the founder cultivated a culture of inclusivity within the church, welcoming all who sought refuge within its walls. Regardless of background, creed, or circumstance, each member was embraced as a cherished member of the congregation – a testament to the founder's commitment to fostering a community rooted in love and acceptance.</p>

                    <p>Under his leadership, the church flourished, becoming not only a place of worship but also a pillar of support for the surrounding community. Through outreach programs, charitable initiatives, and acts of kindness, the church extended its hand to those in need, embodying the teachings of Christ and exemplifying the true essence of faith in action.</p>

                    <p>Yet, amidst the accolades and accomplishments, the founder remained humble, attributing the success</p>

                </div>

            </div>

            {/* <div className='flex lg:flex-row flex-col py-2 justify-center items-center'>

                <img src={charity} className='w-1/2 lg:p-20' />
                <div className='py-10 text-justify lg:pr-10 px-2 flex flex-col gap-4'>
                    <p>In the heart of a bustling community, amidst the echoes of hymns and prayers, stands a figure whose presence embodies the very essence of faith and resilience – the founder of a cherished church. Revered by many and known for his unwavering commitment to serving both God and humanity, the founder's journey is a testament to the transformative power of belief and dedication.</p>
                    <p>Born into humble beginnings, the founder's early years were marked by adversity and hardship. Yet, even in the face of adversity, his unwavering faith remained steadfast. It was this faith that guided him through the darkest of times, instilling in him a profound sense of purpose and calling.</p>
                    <p>As he matured, the founder's passion for spirituality blossomed, leading him to embark on a journey of self-discovery and enlightenment. Through prayer, study, and reflection, he found solace in the teachings of the Bible, drawing inspiration from the stories of prophets and disciples who had walked before him.</p>
                </div>
            </div> */}
        </div>
    )
}

export default Founders


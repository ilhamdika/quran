import React from 'react'
import { useState,useEffect } from 'react'
import TypeIt from 'typeit-react'
import { Link } from 'react-router-dom'
import { DotLoader } from "react-spinners"
// import HeroImg from "../assets/images/profile.JPEG"
// import HeroImg2 from "../assets/images/landing2.png"
// import GitHub from "../assets/images/github.png"
// import Instagram from "../assets/images/instagram.png"
// import Mail from "../assets/images/mail.png"
// import Education from "../assets/images/graduate.png"
// import LinkedIn from "../assets/images/linkedin.png"
// import Css from "../assets/images/skills/css.png"
// import Html from "../assets/images/skills/html.png"
// import JavaScript from "../assets/images/skills/js.png"
// import Laravel from "../assets/images/skills/laravel.png"
// import ReactJs from "../assets/images/skills/react.png"
// import Tailwind from "../assets/images/skills/tailwind.png"
// import Bootstrap from "../assets/images/skills/bootstrap.png"
// import Php from "../assets/images/skills/php.png"
import AOS from 'aos';

export const About = () => {
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])

    useEffect(() => {
    AOS.init(); // Inisialisasi AOS
  }, []);

  return (
    <>
     {
            loading ? <div className="flex justify-center items-center h-screen">
                <DotLoader color={'#a9dbd2'} loading={loading} size={150} />
            </div> :
    <div>
    <div className="grid grid-cols-2 dekstop:h-screen laptop:h-screen laptop:flex-row dekstop:flex-row tablet:flex-row mobile:h-auto mobile:grid-cols-1 pt-10 mobile:pt-32">
    <div className="">
    <div className="flex justify-center">
        <div className="">
            <img src={HeroImg} alt="IMG-20211017-123751" border="0" className='rounded-full w-64' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
            {/* <h1 className="dark:text-white justify-center items-center flex mt-2">
                Hi, internet
            </h1> */}
            <h1 className="dark:text-white justify-center items-center flex text-2xl font-thin mt-2" data-aos="zoom-out-down">
                Ilham Dika Permana
            </h1>
            <h1 className="dark:text-white justify-center items-center flex text-xl font-thin mt-2">
                Web Developer
            </h1>
            <div className="flex flex-row">
                <Link to="https://github.com/ilhamdika" target='_blank'>
                    <img src={GitHub} className="w-10 h-10 mx-3 my-2 bg-dark rounded-3xl dark:rounded-none"/>
                </Link>
                <Link to="https://www.instagram.com/ilham_dika/" target='_blank'>
                    <img src={Instagram} className="w-10 h-10 mx-3 my-2 bg-dark rounded-2xl dark:rounded-none"/>
                </Link>
                <Link to={`mailto:ilham27dika@gmail.com`}>
                    <img src={Mail} className="w-10 h-10 mx-3 my-2 bg-dark rounded-xl dark:rounded-none"/>
                </Link>
                <Link to={"https://www.linkedin.com/in/ilham-dika-permana/"} target='_blank'>
                    <img src={LinkedIn} className="w-10 h-10 mx-3 my-2 bg-dark rounded-3xl dark:rounded-none"/>
                </Link>
            </div>
            
        </div>
    </div>
    </div>
    <div className="p-4 mt-4">
        <TypeIt className="dark:text-white text-3xl font-thin mobile:pt-32">About me</TypeIt>
        <p className="dark:text-white text-xl font-thin mt-3 text-justify"  data-aos="fade-up"
     data-aos-duration="3000">
        I am a fullstack developer who is always motivated and able to work together in a team or work individually. Now looking for a position as a web developer. Someone who is thorough, structured, and nimble when doing tasks. Ambitious to learn and grow from the experiences I've had.
        </p>
    </div>
</div>

<div>
    <h1 className="dark:text-white text-3xl font-bold text-center">My Skills</h1>
    
        <div className="dekstop:grid-cols-9 laptop:grid-cols-9 tablet:grid-cols-7 flex flex-wrap justify-center">
        
            {/* {[1,2,3,4,5,6,7,8,9].map(i=>(
                <img key={i}
                src="/images/laravel.png"
                className="w-28 h-28 max-w-sm mobile:w-14 mobile:h-14 tablet:w-24 mx-3 my-2"
                />
            ))} */}
            <img 
                src={Html}
                className="w-28 h-28 max-w-sm mobile:w-14 mobile:h-14 tablet:w-24 mx-3 my-2"
                data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
                />
            <img 
                src={Css}
                className="w-28 h-28 max-w-sm mobile:w-14 mobile:h-14 tablet:w-24 mx-3 my-2"
                data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
                />
             <img 
                src={JavaScript}
                className="w-28 h-28 max-w-sm mobile:w-14 mobile:h-14 tablet:w-24 mx-3 my-2"
                data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
                />
             <img 
                src={Php}
                className="w-28 h-28 max-w-sm mobile:w-14 mobile:h-14 tablet:w-24 mx-3 my-2"
                data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
                />
            <img
                src={ReactJs}
                className="w-28 h-28 max-w-sm mobile:w-14 mobile:h-14 tablet:w-24 mx-3 my-2"
                data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
                />
            <img
                src={Laravel}
                className="w-28 h-28 max-w-sm mobile:w-14 mobile:h-14 tablet:w-24 mx-3 my-2"
                data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
                />
            <img
                src={Bootstrap}
                className="w-28 h-28 max-w-sm mobile:w-14 mobile:h-14 tablet:w-24 mx-3 my-2"
                data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
                />
            <img
                src={Tailwind}
                className="w-28 h-28 max-w-sm mobile:w-14 mobile:h-14 tablet:w-24 mx-3 my-2"
                data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"
                />
        
        </div>
    
</div>

<div className="mt-3">
    <h1 className="dark:text-white text-3xl font-bold text-center">Education</h1>
    <div className="flex justify-center items-center py-2">
        <div className="" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <img src={Education} alt="IMG-20211017-123751" border="0" className='w-32 h-32 mx-auto bg-black rounded-3xl dark:bg-none'/>
        
            <h1 className="dark:text-white justify-center text-center items-center flex text-3xl font-thin mt-2">
                2018 - 2022
            </h1>
            <h1 className="dark:text-white justify-center text-center items-center flex text-3xl font-thin mt-2">
                Bachelor of Computer Science
            </h1>
            <h1 className="dark:text-white justify-center text-center items-center flex text-3xl font-thin mt-2">
                Muria Kudus University
            </h1>
            
            
        </div>
    </div>
</div>
    </div>
    }
    </>
  )
}

export default About

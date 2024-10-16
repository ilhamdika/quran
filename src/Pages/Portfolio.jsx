import React from 'react'
import { CardPortfolio } from '../components/CardPortfolio'
import TypeIt from 'typeit-react'
import { useEffect, useState } from 'react'
import { DotLoader } from "react-spinners"
// import Satpam from "../assets/images/portfolio/webSatpam.png"
// import webMarketplace from "../assets/images/portfolio/webMarketplace.png"
// import webFilm from "../assets/images/portfolio/webFilm.png"
// import webTisera from "../assets/images/portfolio/webTisera.png"
// import webYokulak from "../assets/images/portfolio/webYokulak.png"
// import webTokokita from "../assets/images/portfolio/webTokokita.png"
// import webPerpusKita from "../assets/images/portfolio/webPerpusKita.png"

export const Portfolio = () => {
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])
  return (
    <>
                {
            loading ? <div className="flex justify-center items-center h-screen">
                <DotLoader color={'#a9dbd2'} loading={loading} size={150} />
            </div> :
        <div className="pt-22 mobile:pt-10">
            <TypeIt className="dark:text-white justify-center text-center items-center flex text-4xl my-10 font-medium mobile:">
                Portfolio</TypeIt>
                <h1 className="dark:text-white justify-center text-center items-center flex text-xl my-10 font-light">This is the result of my work</h1>
                <div className="grid grid-cols-3 laptop:flex-row dekstop:flex-row tablet:flex-row mobile:h-auto mobile:grid-cols-1 my-10">
                        {/* {[1,2,3,4,5,6,7].map(i=> (
                        <CardPortfolio className={'bg-slate-900 bg-opacity-50 rounded-xl'}
                        key={i}
                        thumbnail={'https://static.vecteezy.com/system/resources/previews/000/330/430/original/vector-pencil-line-black-icon.jpg'}
                        title={'Web Developer'}
                        description={'Create a website for information, business etc., which can be accessed digitally'}
                        />
                        ))} */}

                        <CardPortfolio className={'bg-slate-900 bg-opacity-50 rounded-xl'}
                        thumbnail={webTisera}
                        title={'Tisera'}
                        description={'marketplace for government agency purchases and sales'}
                        href={'https://tisera.id/'}
                        />

                        <CardPortfolio className={'bg-slate-900 bg-opacity-50 rounded-xl'}
                        thumbnail={webYokulak}
                        title={'Yokulak'}
                        description={'wholesale purchases for stall sellers'}
                        href={'https://yokulak.com/'}
                        />

                        <CardPortfolio className={'bg-slate-900 bg-opacity-50 rounded-xl'}
                        thumbnail={webTokokita}
                        title={'Tokokita'}
                        description={'e-commerce based grocery shopping from home'}
                        href={'https://tokokita.co.id/'}
                        />

                        <CardPortfolio className={'bg-slate-900 bg-opacity-50 rounded-xl'}
                        thumbnail={webPerpusKita}
                        title={'Perpus Kita'}
                        description={'e-commerce based library'}
                        href={'https://web.perpuskita.id/'}
                        />

                        <CardPortfolio className={'bg-slate-900 bg-opacity-50 rounded-xl'}
                        thumbnail={Satpam}
                        title={'Web Satpam'}
                        description={'Web satpam with laravel framework and react js as frontend and tailwind css as styling web'}
                        href={'https://dakaranusantara.com/'}
                        />

                        <CardPortfolio className={'bg-slate-900 bg-opacity-50 rounded-xl'}
                        thumbnail={webFilm}
                        title={'Web Film'}
                        description={'Web Film with laravel framework and react js as frontend and tailwind css as styling web and using payment gateway midtrans'}
                        href={'https://github.com/ilhamdika/watch-film'}
                        />

                        <CardPortfolio className={'bg-slate-900 bg-opacity-50 rounded-xl'}
                        thumbnail={webMarketplace}
                        title={'Web Marketplace'}
                        description={'Web Marketplace with PHP native and Bootstrap as styling web'}
                        href={'https://github.com/ilhamdika/marketplace-furniture'}
                        />

                        
                </div>
        </div>
        }
    </>
  )
}

export default Portfolio

import React from 'react'
import TypeIt from "typeit-react";
import { useEffect, useState } from "react";
import { DotLoader } from "react-spinners"
import Button from "../components/Button";
import CardNoPicture from "../components/CardNoPicture";
import { Link } from 'react-router-dom';

export const Index = () => {
    const [surah, setSurah] = useState([])

    useEffect(() => {
        const fetchSurah = async () => {
            try{
                const response = await fetch('https://equran.id/api/v2/surat')
                const data = await response.json()
                // console.log(data.data)
                setSurah(data.data)
            }catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchSurah()
    }, [])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

  return (
    <>
        <div className="grid grid-cols-4 laptop:flex-row desktop:flex-row tablet:flex-row mobile:h-auto mobile:grid-cols-1 my-10">
            {surah.map((item, index) => {
                const truncateText = (text, wordLimit) => {
                const words = text.split(" ");
                return words.length > wordLimit
                    ? words.slice(0, wordLimit).join(" ") + "..."
                    : text;
                };
                var audio = item.audioFull['01']

                return (
                <CardNoPicture
                    className={'bg-slate-600 rounded-xl'}
                    key={index}
                    title={item.namaLatin}
                    arabText={item.nama}
                    surah={item.surah}
                    href={item.nomor}
                    description={
                    <span
                        dangerouslySetInnerHTML={{
                        __html: truncateText(item.deskripsi, 15),
                        }}
                    />
                    }
                    audio={audio} 
                />
                );
            })}
        </div>
    </>
  )
}

export default Index

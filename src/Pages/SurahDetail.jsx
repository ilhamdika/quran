import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import { FaArrowLeft } from 'react-icons/fa';

const SurahDetail = () => {
    const { nomorSurah } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [detailSurah, setDetailSurah] = useState([]);

    useEffect(() => {
        const fetchSurah = async () => {
            try {
                const response = await fetch(`https://equran.id/api/v2/surat/${nomorSurah}`);
                const data = await response.json();
                setDetailSurah(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchSurah();
    }, [nomorSurah]);
    
    const ayat = detailSurah.ayat;

    // console.log(ayat);
    // console.log(detailSurah);

  return (
   <>
    {
        loading ? (
            <div className="flex justify-center items-center h-screen">
                <DotLoader color="#a9dbd2" loading={loading} size={150} />
            </div>
        ) : detailSurah ? (
            <div className="">
                <button onClick={() => navigate(-1)}>
                    <FaArrowLeft />
                </button>
                <div className="grid grid-cols-1 lg:h-screen xl:h-screen lg:flex-row dekstop:flex-row md:flex-row sm:h-auto sm:grid-cols-1 pt-10 sm:pt-32">
                    <div className="items-right">
                        <h1 className="text-3xl font-bold dark:text-white">{detailSurah.namaLatin}({detailSurah.arti})</h1>
                        <h1 className="text-3xl font-bold dark:text-white">{detailSurah.nama}</h1>
                        <h5 className="text-xl font-bold dark:text-white">Jumlah Ayat: {detailSurah.jumlahAyat}</h5>
                        <p className="dark:text-white">{<span dangerouslySetInnerHTML={{ __html: detailSurah.deskripsi }} />}</p>
                        <div className="mt-4">
                            <h5 className="dark:text-white font-light">Dengarkan Surat:</h5>
                            <audio controls className="w-full">
                                <source src={detailSurah.audioFull['01']} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                    {ayat.map((item, index) => (
                        <div className="border-2 border-slate-300 mt-10" key={index}>
                            <div className='text-right p-2'>
                                <div className='flex justify-end'>
                                    <h5 className="dark:text-white">{item.teksArab}</h5>
                                </div>
                            </div>
                            <div className='text-left p-2'>
                                <h5 className="dark:text-white font-light">{item.teksLatin}</h5>
                            </div>
                            <div className='text-left p-2'>
                                <h5 className="dark:text-white font-light">Arti: {item.teksIndonesia}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-3xl font-bold dark:text-white">Surah not found</h1>
            </div>
        )
    }
   </>
  )
}

export default SurahDetail

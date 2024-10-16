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
    console.log(detailSurah);

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
                <div className="grid grid-cols-1 dekstop:h-screen laptop:h-screen laptop:flex-row dekstop:flex-row tablet:flex-row mobile:h-auto mobile:grid-cols-1 pt-10 mobile:pt-32">
                    <div className="items-right">
                        <h1 className="text-3xl font-bold dark:text-white">{detailSurah.namaLatin}</h1>
                        <h1 className="text-3xl font-bold dark:text-white">{detailSurah.nama}</h1>
                        <p className="dark:text-white">{<span dangerouslySetInnerHTML={{ __html: detailSurah.deskripsi }} />}</p>
                        <div className="mt-4">
                            <h5 className="dark:text-white font-light">Dengarkan Surat:</h5>
                            <audio controls className="w-full">
                                <source src={detailSurah.audioFull['01']} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
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

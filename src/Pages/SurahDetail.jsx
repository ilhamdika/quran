import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DotLoader } from 'react-spinners';
import { FaArrowLeft } from 'react-icons/fa';

const SurahDetail = () => {
    const { nomorSurah } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [detailSurah, setDetailSurah] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchSurah = async () => {
            try {
                const response = await fetch(`https://equran.id/api/v2/surat/${nomorSurah}`);
                const data = await response.json();
                setDetailSurah(data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchSurah();
    }, [nomorSurah]);

    const convertToArabicNumber = (num) => {
        return num.toString().replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
    };

    return (
        <>
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <DotLoader color="#a9dbd2" loading={loading} size={150} />
                </div>
            ) : detailSurah ? (
                <div className="pt-10 px-4 lg:px-16">
                    <button onClick={() => navigate(-1)} className="mb-4 flex items-center">
                        <FaArrowLeft className="mr-2 dark:text-white" />
                        <span className="dark:text-white">Kembali</span>
                    </button>

                    <div className="mb-10">
                        <h1 className="text-3xl font-bold dark:text-white">{detailSurah.namaLatin} ({detailSurah.arti})</h1>
                        <h2 className="text-3xl font-bold dark:text-white">{detailSurah.nama}</h2>
                        <h5 className="text-xl font-bold dark:text-white mt-2">Jumlah Ayat: {detailSurah.jumlahAyat}</h5>
                        <p className="dark:text-white mt-4">
                            <span dangerouslySetInnerHTML={{ __html: detailSurah.deskripsi }} />
                        </p>
                        <div className="mt-4">
                            <h5 className="dark:text-white font-light">Dengarkan Surat:</h5>
                            <audio controls className="w-full">
                                <source src={detailSurah.audioFull['01']} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {detailSurah.ayat?.map((item, index) => (
                            <div key={index} className="border-2 border-slate-300 rounded-lg p-4">
                                <div className="text-right">
                                    <div className="flex justify-end items-center">
                                        <h5 className="font-arabic dark:text-white text-2xl">{item.teksArab}</h5>
                                        <div className="ml-2 bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center">
                                            {convertToArabicNumber(item.nomorAyat)}
                                        </div>
                                    </div>
                                </div>
                                <div className="text-left mt-2">
                                    <h5 className="dark:text-white font-light text-xl">{item.teksLatin}</h5>
                                    <h5 className="dark:text-white font-light mt-2">Arti: {item.teksIndonesia}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center h-screen">
                    <h1 className="text-3xl font-bold dark:text-white">Surah not found</h1>
                </div>
            )}
        </>
    );
};

export default SurahDetail;

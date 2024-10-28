import React, { useEffect, useState } from 'react';
import { DotLoader } from "react-spinners";
import { Link } from 'react-router-dom';

export const Index = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
            {loading ? (
                <div className="flex justify-center items-center h-screen">
                    <DotLoader color="#10B981" size={60} />
                </div>
            ) : (
                <div className="container mx-auto">
                    <div className="relative bg-green-600 dark:bg-gray-800 text-white py-20 text-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <img
                            src="https://i.pinimg.com/564x/1c/dd/a6/1cdda6cb0b6db02d574910f5c354aa38.jpg"
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover opacity-30"
                        />
                        <div className="relative z-10">
                            <h1 className="text-5xl font-bold animate-fadeInUp">Al-Qur'an: Cahaya Hidup</h1>
                            <p className="mt-4 text-lg animate-fadeInUp delay-200">Temukan ketenangan dan panduan hidup dari kitab suci Al-Qur'an.</p>
                            <Link to="/surah">
                                <button className="bg-white text-green-600 dark:text-gray-900 font-bold py-2 px-4 rounded mt-4 transition-transform transform hover:scale-110 duration-300">
                                    Mulai Baca
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="container mx-auto py-12 px-4 dark:bg-gray-700 transition-colors duration-500">
                        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200 animate-fadeIn">Tentang Al-Qur'an</h2>
                        <div className="text-center max-w-2xl mx-auto">
                            <p className="text-gray-600 dark:text-gray-300 animate-fadeInUp delay-200">
                                Al-Qur'an adalah kitab suci umat Islam yang diturunkan kepada Nabi Muhammad SAW. Mengandung pedoman hidup dan ajaran yang abadi, Al-Qur'an adalah sumber inspirasi yang menuntun umat manusia menuju kebenaran dan kedamaian.
                            </p>
                        </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 py-12 transition-colors duration-500">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg transform hover:scale-105 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 animate-fadeInUp">Panduan Hidup</h3>
                                <p className="text-gray-600 dark:text-gray-300 animate-fadeInUp delay-200">Al-Qur'an memberikan petunjuk yang jelas untuk kehidupan sehari-hari, mengajarkan tentang moral, etika, dan hubungan antar manusia.</p>
                            </div>
                            <div className="text-center p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg transform hover:scale-105 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 animate-fadeInUp">Pesan Kedamaian</h3>
                                <p className="text-gray-600 dark:text-gray-300 animate-fadeInUp delay-200">Setiap ayat Al-Qur'an mengandung pesan kedamaian, mengajak manusia untuk hidup harmonis dan saling menghormati.</p>
                            </div>
                            <div className="text-center p-6 bg-white dark:bg-gray-700 shadow-md rounded-lg transform hover:scale-105 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 animate-fadeInUp">Ajaran Abadi</h3>
                                <p className="text-gray-600 dark:text-gray-300 animate-fadeInUp delay-200">Ajaran-ajaran yang terdapat dalam Al-Qur'an tetap relevan sepanjang zaman, memberikan panduan yang tak lekang oleh waktu.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-600 dark:bg-gray-800 text-white py-12 text-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
                        <h2 className="text-3xl font-bold animate-fadeInUp">Mari Baca Al-Qur'an Setiap Hari</h2>
                        <p className="mt-4 animate-fadeInUp delay-200">Mulailah perjalanan spiritual Anda dengan membaca dan memahami Al-Qur'an. Temukan ketenangan di setiap ayatnya.</p>
                        <Link to="/surah">
                            <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition-transform transform hover:scale-110 duration-300">
                                Mulai Sekarang
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Index;

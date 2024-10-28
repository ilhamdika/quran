import React, { useEffect, useState } from 'react';
import { DotLoader } from "react-spinners";
import CardNoPicture from "../components/CardNoPicture";

export const Surah = () => {
    const [surah, setSurah] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchSurah = async () => {
            try {
                const response = await fetch('https://equran.id/api/v2/surat');
                const data = await response.json();
                setSurah(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSurah();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <DotLoader color="#36d7b7" loading={loading} size={60} />
            </div>
        );
    }

    const filteredSurah = surah.filter(item => 
        item.namaLatin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="my-10 lg:mx-4">
            <div className="mb-4 relative">
                <input
                    type="text"
                    placeholder="Cari Surah..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border rounded p-3 w-full pr-10 dark:text-white dark:bg-gray-800 shadow-lg transition-shadow duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {searchTerm && (
                    <button 
                        onClick={() => setSearchTerm('')}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-white transition-transform duration-300 hover:scale-125"
                    >
                        &times;
                    </button>
                )}
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
                {filteredSurah.map((item, index) => {
                    const truncateText = (text, wordLimit) => {
                        const words = text.split(" ");
                        return words.length > wordLimit
                            ? words.slice(0, wordLimit).join(" ") + "..."
                            : text;
                    };

                    return (
                        <div className="my-1 transform transition-transform duration-300 hover:scale-105" key={index}>
                            <CardNoPicture
                                className={'rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg'}
                                title={item.namaLatin}
                                arabText={item.nama}
                                surah={item.surah}
                                href={'/detailSurah/' + item.nomor}
                                description={
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: truncateText(item.deskripsi, 15),
                                        }}
                                    />
                                }
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Surah;

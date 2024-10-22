import React from 'react';
import { Link } from 'react-router-dom';

export const CardNoPicture = ({ className, title, description, href, target, surah, arabText, audio }) => {
  return (
    <div className={`mx-2 border-2 border-slate-300 mt-10 flex flex-col justify-between ${className} h-full`}>
      <div className="p-2 flex-grow">
        <Link to={href} target={target}>
          <h3 className="text-3xl mb-2 dark:text-white hover:text-blue-500">
            {title}
          </h3>
          <h3 className="font-arabic text-3xl mb-2 dark:text-white hover:text-blue-500 text-right">
            {arabText}
          </h3>
          <h5 className="dark:text-white font-light text-center">
            {surah}
          </h5>
        </Link>
        <p className="dark:text-white font-light text-center">
          {description}
        </p>
      </div>

      <Link to={href} target={target} className="text-center">
        <button className="dark:bg-gray-800 dark:text-white text-green-600 font-bold py-2 px-4 rounded mt-4 transition-transform transform hover:scale-110 duration-300 ease-in-out mx-auto mb-2">
          Baca
        </button>
      </Link>
      {/* Uncomment if you want to include audio controls */}
      {/* <div className="mt-4 text-center">
        <h5 className="dark:text-white font-light text-center">Dengarkan Surat:</h5>
        <audio controls className="w-full">
          <source src={audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div> */}
    </div>
  );
}

export default CardNoPicture;

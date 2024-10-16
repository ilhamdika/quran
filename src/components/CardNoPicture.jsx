import React from 'react'
import { Link } from 'react-router-dom'

export const CardNoPicture = ({className, title, description, href, target, surah, arabText, audio}) => {
  return (
    <div className={`sm:h-96 sm:w-full sm:my-8 border-2 border-slate-300 mt-10` + className }>
      <div>
        <Link to={href} target={target}>
          <h3 className="text-3xl mb-2 dark:text-white hover:text-blue-500">
              {title}
          </h3>
          <h3 className="text-3xl mb-2 dark:text-white hover:text-blue-500">
              {arabText}
          </h3>
          <h5 className="dark:text-white font-light text-center">
              {surah}
          </h5>
        </Link>
          <p className="dark:text-white font-light text-center">
              {description}
          </p>

          {/* <div className="mt-4 text-center">
            <h5 className="dark:text-white font-light text-center">Dengarkan Surat:</h5>
            <audio controls className="w-full">
              <source src={audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div> */}
      </div>
    </div>
  )
}

export default CardNoPicture
import React from 'react'
import { Link } from 'react-router-dom'

export const CardPortfolio = ({className, thumbnail, title, description, href}) => {
  return (
    <div className={`bg-slate-200 mr-3 ml-3 my-2 mobile:h-100 mobile:w-full mobile:my-2 mobile:mx-auto` + className }>
        <Link target="_blank" to={href}>
        <img src={thumbnail} alt="Gambar" className="w-full mb-4 p-5 mt-10 mobile:auto mobile:w-full mobile:px-2 " />
        </Link>
        <Link target="_blank" to={href}>
        <h3 className="text-3xl mb-2 dark:text-white font-light text-center">
            {title}
        </h3>
        </Link>
        <p className="dark:text-white font-light text-center px-2 py-2">
            {description}
        </p>
      </div>
  )
}

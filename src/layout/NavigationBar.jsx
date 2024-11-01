import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { BsList } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'


export default function NavigationBar ({text, click}){
    let Menu =[
        {
          name:"Home",
          link: "/"
        },
        {
          name:"Surah",
          link:"surah"
        },
        {
          name:"About Creator",
          link: "about"
        },
        
      ];
      let [open,setOpen]=useState(false);

      const closeMenu = () => {
        setOpen(false);
      }

      const [prevScrollPos, setPrevScrollPos] = useState(0);
      const [visible, setVisible] = useState(true);

        useEffect(() => {
            const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

            setPrevScrollPos(currentScrollPos);
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
            window.removeEventListener('scroll', handleScroll);
            };
        }, [prevScrollPos]);

    return (
      <div className={`navbar ${visible ? 'sm:block sm:relative' : 'sm:hidden'}`}>
      <div className='shadow-md w-full fixed-absolute top-0 left-0 sm:fixed sm:bg-green-500 sm:dark:bg-gray-900 '>
          <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
              <div className='text-3xl cursor-pointer flex items-center dark:text-white'>
                <Link to='/'>
                    Quran
                </Link>
              </div>
              <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden'>
                {open ? <IoCloseSharp className='dark:text-white' /> : <BsList className='dark:text-white'/>}
              </div>
              <ul className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto sm:bg-green-500 dark:bg-gray-900 md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                 
                  {
                    Menu.map((menu)=>(
                      <li key={menu.name} onClick={closeMenu} className='lg:ml-8 text-xl md:my-0 my-7'>
                        <Link to={menu.link}className='dark:text-white hover:text-gray-400 duration-500 ml-5 mr-10'>
                          {menu.name}
                        </Link>
                      </li>
                    ))
                  }
                 
              </ul>
          </div>
    </div>
    </div>
    )
}
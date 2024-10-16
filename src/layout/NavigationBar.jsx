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
          name:"Portfolio",
          link:"portfolio"
        },
        {
          name:"About Me",
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
      <div className={`navbar ${visible ? 'mobile:block mobile:relative' : 'mobile:hidden'}`}>
      <div className='shadow-tablet w-full fixed-absolute top-0 left-0 mobile:fixed mobile:bg-blue-500 mobile:dark:bg-gray-500 '>
          <div className='tablet:flex items-center justify-between py-4 tablet:px-10 px-7'>
              <div className='text-3xl cursor-pointer flex items-center dark:text-white'>
                <Link to='/'>
                    MeIlham
                </Link>
              </div>
              <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer tablet:hidden'>
                {open ? <IoCloseSharp /> : <BsList />}
              </div>
              <ul className={`tablet:flex tablet:items-center tablet:pb-0 pb-12 absolute tablet:static  tablet:z-auto z-[-1] left-0 w-full tablet:w-auto mobile:bg-blue-500 tablet:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                  {/* <li>
                        <Link href='/'>Home</Link>
                  </li>
                  <li>
                        <Link href='/'>Portfolio</Link>
                  </li>
                  <li>
                        <Link href='/'>About Me</Link>
                  </li> */}
                  {
                    Menu.map((menu)=>(
                      <li key={menu.name} onClick={closeMenu} className='laptop:ml-8 text-xl tablet:my-0 my-7'>
                        <Link to={menu.link}className='dark:text-white hover:text-gray-400 duration-500 ml-5 mr-10'>
                          {menu.name}
                        </Link>
                      </li>
                    ))
                  }
                  {/* <Button onClick={click}
                    className="text-white bg-slate-600 dark:bg-white dark:text-black ">
                    {text}
                  </Button> */}
              </ul>
          </div>
    </div>
    </div>
    )
}
import NavigationBar from "./NavigationBar"
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import moment from "moment-timezone";
import InfoBottom from "./InfoBottom";


export default function LayoutPage ({children}){
    
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  
    
    return(
        <>
        <div className="dark:bg-dark">
            <div className="mr-10 ml-10">
                {/* Navbar */}
                <div className="mobile:fixed top-0 left-0 w-full z-50">
                <NavigationBar
                text={dark ? <FiMoon/> : <FiSun/> }
                click={toggleTheme}
                
                
                />
                </div>

                {/* Konten */}
                <div>
                    <main className="dark:bg-dark">
                        {children}
                    </main>
                </div>
                 <div>
                    <InfoBottom/>
                </div>   
            </div>
        </div>
        </>
    )
}
import { useState } from 'react'
import burguerMenu from '../assets/icon-hamburger.svg'

export const Navbar = () => {

    const [menuClicked, setMenuClicked] = useState(false)
    const handleClick = () => {
        setMenuClicked(!menuClicked)
    }

  return (
    <nav className=' sm:h-[24px]'>
        <ul className={`${menuClicked ? 'flex':'hidden'} bg-white py-[39px] w-[329px] h-[305px] top-[106px] absolute left-0 right-0 mx-auto flex-col items-center place-content-around after:content-[""] after:absolute after:right-0 after:top-[-23px] after:border-[12px] after:border-t-transparent after:border-l-transparent after:border-b-white after:border-r-white text-dark-grayish-blue text-xl z-10  
        
        sm:flex sm:after:hidden sm:bg-transparent sm:flex-row sm:top-0 sm:w-[400px] sm:h-full sm:py-0 sm:relative sm:mt-0 sm:text-white

        md:w-[500px]
        `}>
        <li className='cursor-pointer'><a href="#">About</a></li>
        <li className='cursor-pointer'><a href="#">Services</a></li>
        <li className='cursor-pointer'><a href="#">Projects</a></li>
        <li className='cursor-pointer bg-yellow w-[140px] h-[56px] grid place-content-center rounded-full font-Fraunces text-very-dark-desaturated-blue uppercase sm:bg-white sm:hover:bg-opacity-25 sm:hover:text-white'><a href="#">Contact</a></li>
        </ul>
        <div className=''>
            <img className='cursor-pointer sm:hidden' onClick={handleClick} src={burguerMenu} alt="menu hamburguesa"  />
        </div>
    </nav>
  )
}

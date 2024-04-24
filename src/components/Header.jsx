import logo from '../assets/logo.svg'
import { Navbar } from './Navbar'


export const Header = () => {
  return (
    <header className='w-full px-6 pt-8 absolute font-Barlow'>
      <div className='flex place-content-between'>
        <img src={logo} alt="" />
        <Navbar/>
       </div>
    </header> 
  )
}

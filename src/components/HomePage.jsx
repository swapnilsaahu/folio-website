import { useEffect, useRef } from 'react'
import blackframe from '../assets/blackframe.png'
import upscaleframe from '../assets/blackframe_upscayl_7x_upscayl-standard-4x.png'
import gif from '../assets/live.gif'
import windowgrey from "../assets/windowgrey.png"
import topbar from "../assets/topaddon.png"
import nextIcon from "../assets/Icon_12.png"
import prevIcon from "../assets/Icon_14.png"
import helm from "../assets/helm-grey-1.png"
import moon from "../assets/moon-1.png"
import shield from "../assets/shield-grey-1.png"
import contacts from "../assets/mail-seal-white-1.png"
import NavItem from './NavItem'
import { Link, Outlet } from 'react-router-dom'
const HomePageLayout = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='fixed scale-50 sm:scale-65 md:scale-100'>
                <div className='flex flex-col h-120 w-150 bg-blue-200 rounded-2xl'>
                    <Outlet />
                </div>
                <div className='flex gap-14 sm:gap-18 mx-12 sm:mx-8 my-2 justify-between'>
                    <NavItem className="hover:shadow-white hover:-translate-y-2">
                        <img src={helm} className='h-10' />
                        <Link to="/" className='text-2xl text-white ml-2'>Me</Link>
                    </NavItem>
                    <NavItem className="hover:-translate-y-2">
                        <img src={moon} className='h-10 ml-4' />
                        <Link to="/projects" className='text-2xl text-white'>Projects</Link>
                    </NavItem>
                    <NavItem className="hover:-translate-y-2">
                        <img src={contacts} className='h-10 ml-5' />
                        <Link to="/contacts" className='text-2xl text-white'>Contacts</Link>
                    </NavItem>
                </div>
            </div>
            <div className="bg-[url(/images/live.gif)] bg-cover bg-center h-screen w-screen"></div>
        </div >
    )
}
export default HomePageLayout;

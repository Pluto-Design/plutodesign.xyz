import PlanetLogo from '../../../assets/images/planetlogo.png'
import { onClickScroll } from '../../../utils/functions/onClickScroll';
import NavButton from './NavButton';
import { RxHamburgerMenu } from 'react-icons/rx'
import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [NavShow, setNavShow] = useState<boolean>(window.innerWidth > 768)
    
    const toggleNav = () => setNavShow((prev: boolean) => !prev)

    const handleResize = () => {
        if (window.innerWidth > 768) {
            setNavShow(true)
        } else {
            setNavShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <header className="w-screen z-50 bg-darken-white py-2 fixed h-auto flex justify-between items-start flex-col md:flex-row">
            <div className="flex flex-row w-full justify-between items-center px-4 md:w-auto">
                <a onClick={() => onClickScroll("main")} className="cursor-pointer">
                    <img src={PlanetLogo} className="w-16 h-16 rounded-full" />
                </a>
                {NavShow ? (
                    <AiOutlineClose onClick={toggleNav} size={24} className="flex md:hidden cursor-pointer" color="black" />
                ) : (
                    <RxHamburgerMenu onClick={toggleNav} size={24} className="flex md:hidden cursor-pointer" color="black" />
                )}
            </div>
            {NavShow && (
                <nav className="md:h-full flex my-4 bg-darken-white py-4 px-4 w-full md:w-auto border-b md:border-0 md:my-0 md:translate-y-0 flex-col md:flex-row justify-evenly items-start md:items-center">
                    <NavButton text="Services" to="services" />
                    <NavButton text="Portfolio" to="portfolio" />
                    <NavButton text="Offers" to="offers" />
                    <NavButton text="Contact" to="footer" />
                </nav>
            )}
        </header>
    )
}



export default Navbar;
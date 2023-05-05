import PlanetLogo from '../../../assets/images/planetlogo.png'
import { onClickScroll } from '../../../utils/functions/onClickScroll';
import NavButton from './NavButton';

const Navbar = () => {
    return (
        <header className="w-screen z-50 bg-darken-white py-2 px-4 fixed h-24 flex justify-between items-center flex-row">
            <a onClick={() => onClickScroll("main")} className="cursor-pointer">
                <img src={PlanetLogo} className="w-16 h-16 rounded-full" />
            </a>
            <nav className="h-full flex flex-row justify-evenly items-center ">
                <NavButton text="Services" to="services" />
                <NavButton text="Portfolio" to="portfolio" />
                <NavButton text="Offers" to="offers" />
                <NavButton text="Contact" to="footer" />
            </nav>
        </header>
    )
}



export default Navbar;
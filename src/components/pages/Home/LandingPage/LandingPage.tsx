import PlanetLogo from '../../../../assets/images/planetlogo.png'
import { onClickScroll } from '../../../../utils/functions/onClickScroll';
import LandingButton from './LandingButton';
import { BsChevronDoubleDown } from 'react-icons/bs'

const LandingPage = () => {
    return (
        <main className="w-full h-screen flex items-center justify-center flex-col" id="main">
            <section className="flex w-full h-[90vh] flex-row">
                <div className="w-2/3 px-32 flex-col flex justify-center items-start">
                    <h1 className="text-6xl font-bold">Professional <span className="text-dark-red">web services</span> for</h1>
                    <h2 className="text-6xl font-bold text-dark-red">Your Business</h2>
                    <p className="text-5xl font-bold text-dark-red opacity-60 py-2">Design / Development / Hosting</p>
                    <div className="w-full flex justify-start items-center flex-row">
                        <LandingButton text="See our portfolio" to="portfolio" />
                        <LandingButton text="Buy Now" to="offers" />
                    </div>
                </div>
                <div className="w-1/3 flex justify-center items-center pr-8">
                    <img src={PlanetLogo} className="w-[31.25rem] h-[31.25rem]" />
                </div>
            </section>
            <div className="w-full h-[10vh] flex justify-center items-center">
                <BsChevronDoubleDown className="text-6xl animate-bounce text-dark-red cursor-pointer" onClick={() => onClickScroll("portfolio")} />
            </div>
        </main>
    )
}

export default LandingPage; 
import PlanetFooter from '../../../../assets/images/planet_footer.png'

const Footer = () => {
    return (
        <footer className="w-full h-96 flex flex-row justify-between items-center" id="footer">
            <img src={PlanetFooter} className="w-1/2 h-full object-fill pointer-events-none" />
            <div className="w-1/2 h-full justify-center items-center flex flex-col">
                <div className="flex flex-1 flex-col items-center justify-center">
                    <h1 className="text-4xl text-dark-red py-4 font-bold">Contact Us</h1>
                    <a href="mailto:contact@plutodesign.xyz" className="rounded-xl text-3xl text-white font-bold px-4 py-2 bg-dark-red">contact@plutodesign.xyz</a>
                </div>
                <p className="text-2xl py-4 text-dark-red font-bold">&copy; 2023 | Pluto Design</p>
            </div>
        </footer>
    )
}

export default Footer;
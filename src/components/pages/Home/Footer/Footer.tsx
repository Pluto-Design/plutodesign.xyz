const Footer = () => {
    return (
        <footer className="w-full h-48 flex flex-col xl:flex-row justify-center xl:justify-evenly items-center" id="footer">
            <h1 className="text-4xl text-dark-red py-2 font-bold">Contact Us</h1>
            <a href="mailto:contact@plutodesign.xyz" className="rounded-xl hover:scale-105 transition-all ease-in-out duration-200 text-xl lg:text-3xl text-white font-bold px-4 py-2 bg-dark-red">contact@plutodesign.xyz</a>
            <p className="text-2xl text-dark-red py-2 font-bold">&copy; 2023 | Pluto Design</p>
        </footer>
    )
}

export default Footer;
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
    return (
        <section className="w-full pb-12 flex flex-col" id="portfolio">
            <p className="text-5xl font-bold mt-8 text-dark-red flex items-center justify-center">Portfolio</p>
            <div className="flex flex-1 lg:px-8 pt-8 flex-wrap justify-center items-center">
                <PortfolioCard to="/">
                    <img src={"https://cdn.discordapp.com/attachments/1103991914027556920/1104126542319198368/image.png"} className="object-cover h-full w-full rounded-xl" />
                </PortfolioCard>
                <PortfolioCard to="/">
                    <img src={"https://cdn.discordapp.com/attachments/1103991914027556920/1104126542319198368/image.png"} className="object-cover h-full w-full rounded-xl" />
                </PortfolioCard>
                <PortfolioCard to="/">
                    <img src={"https://cdn.discordapp.com/attachments/1103991914027556920/1104126542319198368/image.png"} className="object-cover h-full w-full rounded-xl" />
                </PortfolioCard>
                <PortfolioCard to="/">
                    <div className="w-full h-full flex justify-center hover:opacity-70 transition-all ease-in-out duration-200 rounded-xl bg-dark-red items-center">
                        <p className="text-3xl lg:text-5xl py-6 text-center text-white font-bold">See all Projects</p>
                    </div>
                </PortfolioCard>
            </div>
        </section>
    )
}

export default Portfolio;
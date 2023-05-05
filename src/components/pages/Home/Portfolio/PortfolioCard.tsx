

const PortfolioCard = ({ to, children }: { to: string, children: React.ReactNode | React.ReactNode[] }) => {
    return (
        <a href={to} className="lg:w-[40%] w-full lg:mx-6 mx-2 my-4 rounded-xl h-96 hover:scale-105 duration-200 transition-all ease-in-out">
            {children}
        </a>
    )
}

export default PortfolioCard;
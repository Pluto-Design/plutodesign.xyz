

const PortfolioCard = ({ children }: { children: React.ReactNode | React.ReactNode[] }) => {
    return (
        <div className="lg:w-1/5 w-11/12 cursor-pointer lg:mx-6 mx-2 my-4 rounded-xl h-48 lg:h-96 hover:scale-105 duration-200 transition-all ease-in-out">
            {children}
        </div>
    )
}

export default PortfolioCard;
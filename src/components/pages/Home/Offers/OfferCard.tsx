import Checkmark from '../../../../assets/images/icons/checkmark.png'
import { CardProps } from '../../../../utils/types';

const OfferCard = ({ title, price, offers }: CardProps) => {
    return (
        <div className="w-full md:w-2/5 xl:w-1/4 xl:my-0 my-8 items-center flex flex-col">
            <div className="h-full w-11/12 justify-between px-4 rounded-xl bg-darken-white items-center flex-row xl:flex-col flex">
                <p className="xl:p-4 text-xl xl:text-3xl text-center font-bold text-dark-red">{title}</p>
                <div className="hidden flex-1 xl:flex flex-col w-10/12">
                    {offers.map((offer: string, index: number) => (
                        <div className="w-full flex flex-row items-center my-2" key={index}>
                            <img src={Checkmark} className="h-8 w-8 mx-2" />
                            <p className="w-full my-2 font-bold text-dark-red">
                                {offer}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="text-xl lg:text-3xl my-4 font-bold text-dark-red mb-4">{price}</p>
            </div>
            <div className="py-3 flex items-center justify-center hover:scale-105 transition-all ease-in-out duration-200 cursor-pointer mt-4 w-11/12 rounded-xl bg-darken-white">
                <p className="text-3xl text-dark-red font-bold">Buy Now</p>
            </div>
        </div>
    )
}

export default OfferCard;
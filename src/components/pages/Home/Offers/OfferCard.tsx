import Checkmark from '../../../../assets/images/icons/checkmark.png'
import { CardProps } from '../../../../utils/types';

const OfferCard = ({ title, price, offers }: CardProps) => {
    return (
        <div className="w-1/5 max-h-screen flex flex-col">
            <div className="h-full w-full rounded-xl bg-darken-white items-center flex-col flex">
                <p className="p-4 text-3xl text-center font-bold text-dark-red">{title}</p>
                <div className="flex-1 flex flex-col w-10/12">
                    {offers.map((offer: string, index: number) => (
                        <div className="w-full flex flex-row items-center my-2">
                            <img src={Checkmark} className="h-8 w-8 mx-2" />
                            <p className="w-full my-2 font-bold text-dark-red" key={index}>
                                {offer}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="text-3xl my-4 font-bold text-dark-red mb-4">{price}</p>
            </div>
            <div className="py-3 flex items-center justify-center hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer mt-4 w-full rounded-xl bg-darken-white">
                <p className="text-3xl text-dark-red font-bold">Buy Now</p>
            </div>
        </div>
    )
}

export default OfferCard;
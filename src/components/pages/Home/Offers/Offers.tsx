import { useState } from "react";
import { OffersData } from "../../../../assets/data/OffersData";
import { CardProps } from "../../../../utils/types";
import OfferCard from "./OfferCard";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

const Offers = () => {
    const [showDesignOffers, setShowDesignOffers] = useState<boolean>(true)

    const switchOffers = () => setShowDesignOffers((prev: boolean) => !prev)

    return (
        <section className="w-full flex flex-col xl:px-20 justify-center items-center bg-dark-red" id="offers">
            
            <div className="flex flex-row w-full items-center justify-evenly">
                <AiOutlineDoubleLeft size={24} className={`${!showDesignOffers ? "cursor-pointer text-white" : "cursor-auto text-gray-400"} block xl:hidden w-1/3`} onClick={!showDesignOffers && switchOffers} />
                <h1 className="text-lg text-center lg:text-5xl font-bold my-4 text-darken-white w-1/3">{showDesignOffers ? "Design offers" : "Hosting"}</h1>
                <AiOutlineDoubleRight size={24} className={`${showDesignOffers ? "cursor-pointer text-white" : "cursor-auto text-gray-400"} block xl:hidden w-1/3`} onClick={showDesignOffers && switchOffers} />
            </div>
            <div className="flex flex-row items-center justify-center w-full h-full">
                <AiOutlineDoubleLeft size={48} className={`${!showDesignOffers ? "cursor-pointer text-white" : "cursor-auto text-gray-400"} hidden xl:block`} onClick={!showDesignOffers && switchOffers} />

                <div className="w-full mx-4 rounded-xl relative overflow-hidden my-2 xl:my-4 flex items-center xl:flex-row h-[40rem]">
                    <div className={`${showDesignOffers ? "left-0" : "-left-full"} top-0 transition-all ease-in-out duration-200 xl:duration-500 w-full justify-evenly h-full items-center absolute flex-col flex`}>
                        <div className="flex-1 xl:flex-row flex flex-col w-full items-center justify-center xl:justify-evenly">
                            {OffersData.design.map((offer: CardProps, index: number) => (
                                <OfferCard key={index} title={offer.title} price={offer.price} offers={offer.offers} />
                            ))}
                        </div>
                    </div>
                    <div className={`${showDesignOffers ? "left-full" : "left-0"} top-0 transition-all ease-in-out duration-200 xl:duration-500 w-full justify-evenly h-full items-center absolute flex-col flex`}>
                        <div className="flex-1 flex xl:flex-row flex-col w-full items-center justify-center xl:justify-evenly">
                            {OffersData.hosting.map((offer: CardProps, index: number) => (
                                <OfferCard key={index} title={offer.title} price={offer.price} offers={offer.offers} />
                            ))}
                        </div>
                    </div>
                </div>
                
                <AiOutlineDoubleRight size={48} className={`${showDesignOffers ? "cursor-pointer text-white" : "cursor-auto text-gray-400"} hidden xl:block`} onClick={showDesignOffers && switchOffers} />
            </div>

        </section>
    )
}

export default Offers;
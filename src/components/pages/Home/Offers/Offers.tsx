import { OffersData } from "../../../../assets/data/OffersData";
import { CardProps } from "../../../../utils/types";
import OfferCard from "./OfferCard";


const Offers = () => {
    return (
        <section className="w-full flex flex-col bg-dark-red pb-32" id="offers">
            <h1 className="my-8 text-5xl text-white font-bold text-center">Offers</h1>

            <h1 className="my-16 text-5xl text-white font-bold text-center">Design & Coding</h1>

            <div className="w-full my-8 flex justify-evenly flex-row h-1/2">
                {OffersData.design.map((offer: CardProps, index: number) => (
                    <OfferCard key={index} title={offer.title} price={offer.price} offers={offer.offers} />
                ))}
            </div>

            <h1 className="my-16 text-5xl text-white font-bold text-center">Hosting</h1>

            <div className="w-full my-8 flex justify-evenly flex-row h-1/2">
                {OffersData.hosting.map((offer: CardProps, index: number) => (
                    <OfferCard key={index} title={offer.title} price={offer.price} offers={offer.offers} />
                ))}
            </div>
        </section>
    )
}

export default Offers;
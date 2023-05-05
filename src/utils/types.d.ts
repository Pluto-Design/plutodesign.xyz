export interface CardProps {
    title: string;
    onClick?: VoidFunction;
    price: string;
    offers: string[];
}

export interface OfferData {
    design: CardProps[];
    hosting: CardProps[];
}
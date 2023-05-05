import { OfferData } from '../../utils/types'

export const OffersData: OfferData = {
    design: [
        {
            title: "Starter",
            price: "$99",
            offers: [
                "Excellent for early stage projects",
                "Design & Coding",
                "Search Engine visibility",
                "Ready in 48 Hours",
                "One-page"
            ],
            onClick: () => { console.log("") }
        },
        {
            title: "Advanced",
            price: "$189",
            offers: [
                "Best fit for growing businesses",
                "Design & Coding",
                "Search Engine visibility",
                "Ready in 3 Days",
                "Up to 5 subpages"
            ],
            onClick: () => { console.log("") }
        },
        {
            title: "Full Package",
            price: "$250",
            offers: [
                "Advised for already big and rapidly growing projects",
                "Design & Coding",
                "Search Engine visibility",
                "Ready in 5 Days",
                "Up to 16 subpages"
            ],
            onClick: () => { console.log("") }
        },
    ],
    hosting: [
        {
            title: "Basic",
            price: "$6/month",
            offers: [
                "512 MB RAM",
                "10 GB SSD DISK",
                "500 GB TRANSFER",
            ],
            onClick: () => { console.log("") }
        },
        {
            title: "Medium",
            price: "$16/month",
            offers: [
                "2 GB RAM",
                "50 GB SSD DISK",
                "2 TB TRANSFER",
            ],
            onClick: () => { console.log("") }
        },
        {
            title: "Pro",
            price: "$32/month",
            offers: [
                "4 GB RAM",
                "80 GB SSD DISK",
                "4 TB TRANSFER",
            ],
            onClick: () => { console.log("") }
        },
    ]
}
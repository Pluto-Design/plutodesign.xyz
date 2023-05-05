
interface ServiceCardProps {
    title: React.ReactNode | string;
    description: React.ReactNode;
    icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
    return (
        <div className="relative w-1/2 h-full flex flex-col items-center justify-between py-16">
            <p className="text-white font-bold h-1/5 text-4xl">{title}</p>
            <div className="w-full text-center flex-1 text-5xl flex items-end justify-end px-8 flex-col">
                <div className="absolute top-[22.5%] opacity-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {icon}
                </div>
                <p className="text-lg px-4 text-white font-bold">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ServiceCard;
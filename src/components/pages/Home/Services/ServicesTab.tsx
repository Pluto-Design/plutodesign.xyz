import DesignIcon from '../../../../assets/images/icons/design.png'
import DevelopmentIcon from '../../../../assets/images/icons/development.png'
import HostingIcon from '../../../../assets/images/icons/hosting.png'
import ServiceCard from './ServiceCard'

const ServicesTab = () => {
    return (
        <section className="bg-dark-red w-full h-[32rem] flex flex-col items-center justify-center" id="services">
            <p className="text-5xl h-1/5 font-bold my-4 text-white flex items-center justify-center">Services</p>
            <div className="flex flex-row flex-1 w-full px-8 justify-center">
                <ServiceCard 
                    title="Design" 
                    description={
                        <>
                            Your website will be designed using professional tools and You will be in charge of the whole process. 
                            <br /><br />
                            The design will always match your ideas.
                        </>
                    } 
                    icon={<img src={DesignIcon} className="w-24 h-24 pointer-events-none" />} 
                />
                <ServiceCard 
                    title="Development" 
                    description={
                        <>
                            Your project will be made using HTML, CSS, JavaScript and others depending on Your needs.
                            <br /><br />
                            We won't use Wordpress.
                        </>
                    } 
                    icon={<img src={DevelopmentIcon} className="w-24 h-24 pointer-events-none" />} 
                />
                <ServiceCard 
                    title="Hosting" 
                    description={
                        <>
                            Your website will be hosted and strongly protected from any malicious actions.
                            <br /><br />
                            It will be accessible 24/7.
                        </>
                    } 
                    icon={<img src={HostingIcon} className="w-24 h-24 pointer-events-none" />} 
                />
            </div>
        </section>
    )
}

export default ServicesTab;
import Navbar from "../components/other/Navbar"
import Footer from "../components/pages/Home/Footer/Footer";
import LandingPage from "../components/pages/Home/LandingPage/LandingPage";
import Offers from "../components/pages/Home/Offers/Offers";
import Portfolio from "../components/pages/Home/Portfolio/Portfolio";
import ServicesTab from "../components/pages/Home/Services/ServicesTab";

const Home = () => {
    return (
        <>
            <Navbar />
            <LandingPage />
            <ServicesTab />
            <Portfolio />
            <Offers />
            <Footer />
        </>
    )
}

export default Home;
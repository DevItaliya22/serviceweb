import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import Review from "../Homepage/Review";
import Footer from "../components/Footer/Footer";
import ChooseUs from "../Homepage/ChooseUs";
import CompletedProject from "../Homepage/CompleteProject";
import About from "../Homepage/About";
import Expertise from "../Homepage/Expertise";
// import Plan from "../Homepage/Plan";
import Header from "../Homepage/Header";
import Platform from "../Homepage/Platform";
import Loader from "../Spinner/Loader";

export const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
        const timer = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className="w-full overflow-x-hidden overflow-y-hidden bg-gray-100">
            <Header />
            <div data-aos="fade-down">
                <Expertise />
            </div>
            <div data-aos="fade-left">
                <Platform />
            </div>
            <div data-aos="fade-up">
                <About />
            </div>
            <div data-aos="zoom-in">
                <CompletedProject />
            </div>
            <div data-aos="fade-right">
                <ChooseUs />
            </div>
            <div data-aos="flip-left">
                <Review />
            </div>
            <div data-aos="fade-up">
                <Footer />
            </div>
        </div>
    );
};
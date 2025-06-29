import { useEffect } from "react";
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

export const Dashboard = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <div className="w-screen overflow-x-hidden bg-gray-100">
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

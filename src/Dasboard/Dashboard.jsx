import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import Review from "../Homepage/Review";
import Footer from "../components/Footer/Footer";
import ChooseUs from "../Homepage/ChooseUs";
import CompletedProject from "../Homepage/CompleteProject";
import About from "../Homepage/About";
import Expertise from "../Homepage/Expertise";

export const Dashboard = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, 
        });
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 space-y-6">
            <div className="mb-2" data-aos="fade-down">
                <Expertise />
            </div>
            <div data-aos="fade-up">
                <About />
            </div>
            <div className="mb-2" data-aos="zoom-in">
                <CompletedProject />
            </div>
            <div className="mt-0" data-aos="fade-right">
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

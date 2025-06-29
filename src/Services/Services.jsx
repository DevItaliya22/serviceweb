import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import IteckFooter from '../components/Footer/Footer';
import TopServices from './TopServices';
import CarouselComponent from './ScroolService';

const SoftwareServices = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="py-8 sm:py-12 lg:py-16 px-4">
                <div className="w-full max-w-full mx-auto">
                    <div className="mb-8 sm:mb-12">
                        <Navbar />
                    </div>

                    <div className="w-full sm:mt-12">
                        <TopServices />
                    </div>

                    <div className="w-full sm:mt-16 mb-8 sm:mb-12">
                        <CarouselComponent />
                    </div>
                </div>
            </div>
            <IteckFooter />
        </div>
    )
};

export default SoftwareServices;
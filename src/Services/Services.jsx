import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import IteckFooter from '../components/Footer/Footer';
import TopServices from './TopServices';
import CarouselComponent from './ScroolService';
import { getServices } from '../api/service';
import Loader from '../Spinner/Loader';
import ScrollToTop from '../components/ScrollToTop';

const SoftwareServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                const data = await getServices();
                setServices(data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch services');
                console.error('Error fetching services:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        <div className="min-h-screen ">
            <div className="py-8 sm:py-12 lg:py-16 px-4">
                <div className="w-full max-w-full mx-auto">
                    {loading ? (
                        <>
                            <Loader />
                            <div className="mb-8 sm:mb-12">
                                <Navbar />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mb-8 sm:mb-12">
                                <Navbar />
                            </div>
                            <div className="w-full sm:mt-12">
                                <TopServices services={services} loading={loading} error={error} />
                            </div>
                            <div className="w-full sm:mt-16 mb-8 sm:mb-12">
                                <CarouselComponent services={services} loading={loading} error={error} />
                            </div>
                        </>
                    )}
                </div>
            </div>
            <IteckFooter />
            <ScrollToTop />
        </div>
    )
};

export default SoftwareServices;
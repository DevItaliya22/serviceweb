import Review from "../Homepage/Review";
import Footer from "../components/Footer/Footer";
import ChooseUs from "../Homepage/ChooseUs";
import CompletedProject from "../Homepage/CompleteProject";

export const Dashboard = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 space-y-6">
            <div className="mb-2">
                <CompletedProject />
            </div>
            <div className="mt-0">
                <ChooseUs />
            </div>
            <Review />
            <Footer />
        </div>
    );
};

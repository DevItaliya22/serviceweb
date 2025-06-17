import Review from "../Homepage/Review";
import Footer from "../components/Footer/Footer";

export const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <Review />
        <Footer />
    </div>
  );
}
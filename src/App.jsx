import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dasboard/Dashboard"; 
import AboutUs from "./Pages/AboutUs";
import Portfolio from "./Portfolio/Portfolio";
import Blog from "./Blog/Blog";
import Contact from "./Pages/Contact";
import Services from "./Services/Services";
import Description from "./Portfolio/Description";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div 
        className="min-h-screen w-full bg-gray-100 overflow-y-auto"
        style={{
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* Internet Explorer 10+ */
          WebkitScrollbar: 'none' /* WebKit */
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="max-w-full">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio/:id" element={<Description />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
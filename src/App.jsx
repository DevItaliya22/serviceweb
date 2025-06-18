import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dasboard/Dashboard"; 
import AboutUs from "./Pages/AboutUs";
import Portfolio from "./Portfolio/Portfolio";
import Blog from "./Blog/Blog";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
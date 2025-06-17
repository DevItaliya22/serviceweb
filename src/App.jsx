import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dasboard/Dashboard"; 
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
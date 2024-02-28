import "./App.css";
import HomeData from "./components/home/HomeData";
import HomePage from "./components/home/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/Pages/Shop";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <div className="font-leagueSpartan">
          <Routes>
            <Route path="/" element={<HomePage slides={HomeData} />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

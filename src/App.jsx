import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import component
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./page/Home";
import Dolalak from "./page/Dolalak";
import AboutUs from "./page/AboutUs";
import Chatbot from "./page/Chatbot";
import History from "./page/History";
import NotFound from "./page/NotFound";


/**
 * This file is for routing app and then include the navbar, home, chatbot,
 * about us, dolalak and footer.
 * @returns 
 */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />


        {/* Routing */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dolalak" element={<Dolalak/>} />
            <Route path="/about-us" element={<AboutUs/>} />
            <Route path="/chatbot" element={<Chatbot/>} />
            <Route path="/history" element={<History/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
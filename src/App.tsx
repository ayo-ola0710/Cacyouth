import {Routes, Route} from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/shared/Navbar.tsx";
import Footer from "./components/shared/Footer.tsx";
import Home from "./pages/Home.tsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </>
  );
};

export default App;

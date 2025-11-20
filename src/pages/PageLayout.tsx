import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { AnimatePresence, motion } from "framer-motion";

const PageLayout = () => {
    const location = useLocation();

    return (
        <div>
            <Navbar />

            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <Outlet />
                </motion.div>
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default PageLayout;

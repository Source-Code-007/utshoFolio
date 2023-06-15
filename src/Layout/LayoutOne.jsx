import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import AnimatedCursor from "react-animated-cursor"
import { motion, useScroll, useSpring } from "framer-motion";
import CompoFromTop from '../HelpingCompo/CompoFromTop';
import Footer from '../Components/Footer/Footer';


const LayoutOne = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <>
            <CompoFromTop>
                <motion.div className="h-1 bg-[#e74c3c] w-full fixed inset-0 z-50" style={{ scaleX }} />
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
                <AnimatedCursor />
            </CompoFromTop>
        </>
    );
};

export default LayoutOne;
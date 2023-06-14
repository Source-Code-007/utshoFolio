import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import AnimatedCursor from "react-animated-cursor"
import { motion, useScroll, useSpring } from "framer-motion";


const LayoutOne = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <>
            <motion.div className="h-1 bg-[#e74c3c] w-full fixed inset-0 z-50" style={{ scaleX }} />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <AnimatedCursor />
        </>
    );
};

export default LayoutOne;
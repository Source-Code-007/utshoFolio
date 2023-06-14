import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import AnimatedCursor from "react-animated-cursor"


const LayoutOne = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <AnimatedCursor />
        </>
    );
};

export default LayoutOne;
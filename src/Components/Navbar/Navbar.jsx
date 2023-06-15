import { useEffect, useState } from "react";
import MyActiveLink from "../../HelpingCompo/MyActiveLink";
import logo from '../../assets/img/utsho-logo.png'
import { motion } from "framer-motion";


const Navbar = () => {
    const [isTop, setIsTop] = useState(true)


    useEffect(() => {

        const handleScroll = () => {
            const isTopP = window.scrollY < 100
            setIsTop(isTopP)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isTop])

    const menu = <>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        {/* <li><MyActiveLink to={'/'}>Home</MyActiveLink></li>
        <li><MyActiveLink to={'#about'}>About</MyActiveLink></li>
        <li><MyActiveLink to={'/Case Studies'}>Case Study</MyActiveLink></li>
        <li><MyActiveLink to={'/contact'}>Contacts</MyActiveLink></li> */}
    </>

    return (
        <div className={`navbar shadow transition ${isTop ? 'bg-[#e74d3c09]' : 'bg-[#e74d3c1e]'} fixed inset-x-0 z-40`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>

                <motion.div variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 }
                }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a className="btn btn-ghost normal-case text-xl"><img src={logo} className="w-10 h-auto" alt="" /></a>
                </motion.div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>

            <div className="navbar-end">
                <motion.div variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 }
                }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <motion.button whileHover={{ scale: 1.1, transition: { duration: .3 } }} whileTap={{ scale: 0.9 }} className='cmn-btn-one'> Hire me </motion.button>
                </motion.div>

            </div>
        </div>
    );
};

export default Navbar;
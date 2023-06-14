/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from 'react-type-animation';
import testBg2 from '../../../assets/img/wave-haikei.svg'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center text-white bg-fixed relative" style={{ backgroundImage: `url(${testBg2})` }}>
            <div className='pl-14 px-5 w-full md:4/6 xl:w-3/6'>
                <motion.div
                    animate={{ x: 50 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className='space-y-8'
                >
                    <h2 className='font-bold text-5xl'>Hello, I'm <span className='text-[#e74c3c]'>UTSHO</span></h2>
                    <p>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed once, initially
                                'A passionate Web Developer',
                                1500,
                                'A passionate Frontend Developer',
                                1500,
                                'A passionate Problem Solver ',
                                1500,
                            ]}
                            speed={50}
                            // style={{ fontSize: '2em' }}
                            className='font-semibold text-2xl'
                            repeat={Infinity}
                        />
                    </p>

                    <motion.button
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: .3 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className='cmn-btn-one !mt-6'
                    >
                        Hire me
                    </motion.button>
                </motion.div>
            </div>
            <div className='w-auto h-auto flex flex-col gap-5 text-xl absolute right-5 top-1/2 -translate-x-1/2 bg-[#e74d3c55] p-3'>
                <Link className='inline-block focus:scale-110 text-[#e74c3c]'><FaFacebook></FaFacebook></Link>
                <Link className='inline-block focus:scale-110 text-[#e74c3c]'><FaLinkedin></FaLinkedin></Link>
                <Link className='inline-block focus:scale-110 text-[#e74c3c]'><FaGithub></FaGithub></Link>
            </div>
        </div >
    );
};

export default Banner;
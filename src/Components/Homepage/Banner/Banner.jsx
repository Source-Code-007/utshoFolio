/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from 'react-type-animation';
import testBg2 from '../../../assets/img/wave-haikei.svg'
import { animate, motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center text-white bg-fixed relative overflow-x-hidden" style={{ backgroundImage: `url(${testBg2})` }}>
            <div className='pl-14 px-5 w-full md:4/6 xl:w-3/6 space-y-8'>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.5 }}
                // animate={{ x: 50 }}
                // transition={{ type: "spring", stiffness: 100 }}
                >
                    <h2 className='font-bold text-5xl'>Hello, I'm <span className='text-[#e74c3c]'>Ahashan Habib Utsho</span></h2>
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.8 }}
                // animate={{ x: 50 }}
                // transition={{ type: "spring", stiffness: 100 }}
                >
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
                </motion.div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 1 }}
                // animate={{ x: 50 }}
                // transition={{ type: "spring", stiffness: 100 }}
                >
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

            {/* social icon */}
            {/* <div className=''> */}
            <motion.div variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 }
            }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-auto h-auto flex flex-col gap-5 text-xl absolute right-5 top-1/2 -translate-x-1/2 bg-[#e74d3c55] p-3'
            >
                <Link className='inline-block transition hover:scale-125' to={'https://web.facebook.com/UtshoBhai007'} target='_blank'><FaFacebook></FaFacebook></Link>
                <Link className='inline-block transition hover:scale-125' to={'https://www.linkedin.com/in/ahashan-habib-utsho-722745107'} target='_blank'><FaLinkedin></FaLinkedin></Link>
                <Link className='inline-block transition hover:scale-125' to={'https://github.com/Source-Code-007'} target='_blank'><FaGithub></FaGithub></Link>
            </motion.div>
            {/* </div> */}

        </div >
    );
};

export default Banner;
/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from 'react-type-animation';
// import testBg2 from '../../../assets/img/wave-haikei.svg'
import testBg2 from '../../../assets/img/banner.jpg'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import myBannerLottie from '../../../../public/lottieAnim/programming-computer.json'
import Lottie from "lottie-react";



const Banner = () => {
    return (
        <div className="bg-cover bg-center text-white bg-fixed relative overflow-x-hidden bg-slate-900 bg-blend-overlay" style={{ backgroundImage: `url(${testBg2})` }}>

            <div className='h-screen grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5 lg:mx-10 items-center justify-center'>
                <div className='px-5 space-y-8'>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.5, type: "spring", stiffness: 70 }}
                    >
                        <h2 className='font-bold text-3xl lg:text-4xl xl:text-5xl'>Hello, I'm <span className='text-[#e74c3c]'>Ahashan Habib Utsho</span></h2>
                    </motion.div>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.7, type: "spring", stiffness: 70 }}
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
                                className='font-semibold text-lg lg:text-xl xl:text-2xl'
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
                        whileInView="visible"
                        transition={{ delay: 0.8, type: "spring", stiffness: 70 }}
                    >
                        <Link to={'https://drive.google.com/file/d/1LE_UNmr0u0spqej3QxYeNkNXtryQBo8f/view?usp=drive_link'} target="_blank"><motion.button whileHover={{ scale: 1.1, transition: { duration: .3 } }} whileTap={{ scale: 0.9 }} className={'cmn-btn-one'}> Resume </motion.button> </Link>
                    </motion.div>

                </div>


                <div className='hidden lg:block'>
                    <Lottie animationData={myBannerLottie} className="flex justify-center items-center" loop={true} />
                </div>
            </div>

            {/* social icon */}
            <motion.div variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
            }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 1, type: "spring", stiffness: 100 }}
                className='w-auto h-auto flex flex-col gap-5 text-xl absolute right-5 top-1/2 -translate-x-1/2 bg-[#e74d3c55] p-3'
            >
                <Link className='inline-block transition hover:scale-125' to={'https://web.facebook.com/UtshoBhai007'} target='_blank'><FaFacebook></FaFacebook></Link>
                <Link className='inline-block transition hover:scale-125' to={'https://www.linkedin.com/in/ahashan-habib-utsho-722745107'} target='_blank'><FaLinkedin></FaLinkedin></Link>
                <Link className='inline-block transition hover:scale-125' to={'https://github.com/Source-Code-007'} target='_blank'><FaGithub></FaGithub></Link>
            </motion.div>

        </div >
    );
};

export default Banner;
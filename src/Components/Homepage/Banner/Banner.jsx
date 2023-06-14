/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from 'react-type-animation';
import testBg2 from '../../../assets/img/wave-haikei.svg'
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center text-white bg-fixed" style={{ backgroundImage: `url(${testBg2})` }}>
            <div className='pl-14 space-y-5 px-5 w-full md:4/6 xl:w-3/6'>
                <motion.div
                    animate={{ x: 50 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <p className='font-semibold text-2xl'>Hello, I'm <span className='text-[#e74c3c] font-bold text-2xl'>UTSHO</span></p>
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
                            className='font-bold text-4xl md:text-5xl'
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
        </div >
    );
};

export default Banner;
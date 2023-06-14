import { Link } from 'react-router-dom';
import CommonSectionTitle from '../../../HelpingCompo/CommonSectionTitle';
import spiceOfLifeMockup from '../../../assets/img/spiceOfLife.png'
import edutainmentToysMockup from '../../../assets/img/edutainmentToys.png'
import wizCraftMockup from '../../../assets/img/wizCraft-academy.png'
import { motion } from "framer-motion";



const Projects = () => {

    return (
        <div className='py-20 my-container' id='projects'>
            <CommonSectionTitle title={'projects'} subtitle={'Here you will find some of the personal and clients projects that I created with each project containing its own case study'}></CommonSectionTitle>
            <div className='space-y-36 mt-10'>
                <motion.div
                    animate={{ x: 50 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <img src={spiceOfLifeMockup} alt="" />
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='space-y-4'>
                                <h2 className='font-bold text-4xl'>Spice Of Life</h2>
                                <p className='!mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam atque aliquid quae laboriosam cupiditate molestias dicta impedit! Nobis in doloremque illo esse ullam vero sint quam amet repudiandae praesentium.</p>
                                <Link to={`/project/${1}`}><motion.button whileHover={{ scale: 1.1, transition: { duration: .3 } }} whileTap={{ scale: 0.9 }} className='cmn-btn-one'> Case Study </motion.button></Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: 50, x: 50 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <img src={edutainmentToysMockup} alt="" />
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='space-y-4'>
                                <h2 className='font-bold text-4xl'>Edutainment Toys</h2>
                                <p className='!mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam atque aliquid quae laboriosam cupiditate molestias dicta impedit! Nobis in doloremque illo esse ullam vero sint quam amet repudiandae praesentium.</p>
                                <Link to={`/project/${2}`}><motion.button whileHover={{ scale: 1.1, transition: { duration: .3 } }} whileTap={{ scale: 0.9 }} className='cmn-btn-one'> Case Study </motion.button></Link>
                            </div>
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    animate={{ x: 50 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <img src={wizCraftMockup} alt="" />
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='space-y-4'>
                                <h2 className='font-bold text-4xl'>WizCraft Academy</h2>
                                <p className='!mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam atque aliquid quae laboriosam cupiditate molestias dicta impedit! Nobis in doloremque illo esse ullam vero sint quam amet repudiandae praesentium.</p>
                                <Link to={`/project/${3}`}><motion.button whileHover={{ scale: 1.1, transition: { duration: .3 } }} whileTap={{ scale: 0.9 }} className='cmn-btn-one'> Case Study </motion.button></Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Projects;
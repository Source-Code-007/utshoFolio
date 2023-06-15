import { Link } from 'react-router-dom';
import CommonSectionTitle from '../../../HelpingCompo/CommonSectionTitle';
import spiceOfLifeMockup from '../../../assets/img/spiceOfLife.png'
import edutainmentToysMockup from '../../../assets/img/edutainmentToys.png'
import wizCraftMockup from '../../../assets/img/wizCraft-academy.png'
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from 'react';



const Projects = () => {
    const project1 = useRef(null)
    const project2 = useRef(null)
    const project3 = useRef(null)
    const isInViewP1 = useInView(project1, {once: true})
    const isInViewP2 = useInView(project2, {once: true})
    const isInViewP3 = useInView(project3, {once: true})
    const mainControls1 = useAnimation()
    const mainControls2 = useAnimation()
    const mainControls3 = useAnimation()

    // activate animation when scrolling via framer motion
    useEffect(()=>{
        if(isInViewP1){
            mainControls1.start("visible")
        }
        if(isInViewP2){
            mainControls2.start("visible")
        }
        if(isInViewP3){
            mainControls3.start("visible")
        }
    }, [isInViewP1, isInViewP2, isInViewP3, mainControls1, mainControls2, mainControls3])

    return (
        <div className='py-20 mb-32 my-container' id='projects'>
            <CommonSectionTitle title={'projects'} subtitle={'Here you will find some of the personal and clients projects that I created with each project containing its own case study'}></CommonSectionTitle>
            <div className='space-y-36 mt-10'>

                <motion.div
                 ref={project1}
                 variants={{
                    hidden: { opacity: 0, y: 115 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls1}
                transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <img src={spiceOfLifeMockup} alt="" className='pointer-events-none' />
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='space-y-4'>
                                <h2 className='font-bold text-4xl'>Spice Of Life</h2>
                                <p className='!mb-4 leading-8'>This is a recipe website where you can find recipes from top chefs, read blogs, and sign up or sign in to share your own recipes. I used React for the client side and Firebase and Express for the server side in this project.</p>
                                <Link to={`/project/${1}`}><motion.button whileHover={{ scale: 1.1, transition: { duration: .3 } }} whileTap={{ scale: 0.9 }} className='cmn-btn-one'> Case Study </motion.button></Link>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    ref={project2}
                    variants={{
                        hidden: { opacity: 0, y: 115 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls2}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <img src={edutainmentToysMockup} alt="" className='pointer-events-none' />
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='space-y-4'>
                                <h2 className='font-bold text-4xl'>Edutainment Toys</h2>
                                <p className='!mb-4 leading-8'>Welcome to Edutainment Toy, an responsive educational toy website where users can explore, contribute, and engage with a wide range of educational toys.</p>
                                <Link to={`/project/${2}`}><motion.button whileHover={{ scale: 1.1, transition: { duration: .3 } }} whileTap={{ scale: 0.9 }} className='cmn-btn-one'> Case Study </motion.button></Link>
                            </div>
                        </div>
                    </div>
                </motion.div>


                <motion.div
                    ref={project3}
                 variants={{
                        hidden: { opacity: 0, y: 115 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls3}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div>
                            <img src={wizCraftMockup} alt="" className='pointer-events-none' />
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='space-y-4'>
                                <h2 className='font-bold text-4xl'>WizCraft Academy</h2>
                                <p className='!mb-4 leading-8'>Welcome to WizCraft Academy, a Magic School Summer Camp website! This is a React-based project that allows students to enroll in and learn specific extra-curricular activities during their summer break.</p>
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
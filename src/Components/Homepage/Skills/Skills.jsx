import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CommonSectionTitle from '../../../HelpingCompo/CommonSectionTitle';
import { motion } from "framer-motion";
import { useState } from 'react';


const Skills = () => {
    const [currTab, setCurrTab] = useState('Web')

    const tabs = ['Web', "Tools", "Others"]

    const webSkills = [{ tech: 'HTML', range: '90' }, { tech: 'CSS', range: '85' }, { tech: 'Tailwind', range: '95' }, { tech: 'Bootstrap', range: '85' }, { tech: 'Javascript', range: '70' }, { tech: 'Firebase', range: '45' }, { tech: 'Express JS', range: '40' }, { tech: 'MongoDB', range: '40' }]

    return (
        <div className='my-container py-16'>
            <CommonSectionTitle title={'skills'} subtitle={'Cutting-Edge Web Development Expertise'}></CommonSectionTitle>
            <Tabs>

                <TabList className={'flex justify-center gap-8'}>
                    {
                        tabs.map((tab, ind) => {
                          return  <motion.button onClick={()=>{setCurrTab(tab)}} key={ind}
                                whileHover={{ scale: 1.1, transition: { duration: .5 } }} whileTap={{ scale: 0.8 }} className={`${currTab===tab ? 'cmn-btn-one' : 'cmn-btn-one-outline' }`}> <Tab>{tab}</Tab>
                            </motion.button>
                        })
                    }

                </TabList>

                <div className='mt-16'>
                    <TabPanel>
                        <div className='grid grid-cols-2 gap-4'>

                            {
                                webSkills.map((skill, ind) =>
                                    <div key={ind} className='bg-slate-800 text-white bg-opacity-50 py-6 px-8 rounded relative'>
                                        {skill.tech}
                                        <div className={`absolute top-0 left-0 z-50 h-full bg-[#e74d3c55]`} style={{ width: `${skill.range}%` }}></div>
                                    </div>
                                )
                            }


                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </div>

            </Tabs>
        </div>
    );
};

export default Skills;
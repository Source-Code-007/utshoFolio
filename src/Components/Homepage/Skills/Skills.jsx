import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CommonSectionTitle from '../../../HelpingCompo/CommonSectionTitle';
import { motion } from "framer-motion";
import { useState } from 'react';


const Skills = () => {
    const [currTab, setCurrTab] = useState('Web')


    const Web = [{ tech: 'HTML', range: '90' }, { tech: 'CSS', range: '85' }, { tech: 'Tailwind', range: '95' }, { tech: 'Bootstrap', range: '85' }, { tech: 'Javascript', range: '70' }, { tech: 'Firebase', range: '45' }, { tech: 'Express JS', range: '40' }, { tech: 'MongoDB', range: '40' }]
    const Tools = [{ tech: 'Figma', range: '80' }, { tech: 'Git', range: '65' }, { tech: 'Photoshop', range: '35' }]
    const Others = [{ tech: 'Team work', range: '70' }, { tech: 'Fast learning', range: '65' }]
    const tabs = ['Web', "Tools", "Others"]
    const tabPanels = [Web, Tools, Others]

    return (
        <div className='my-container py-16'>
            <CommonSectionTitle title={'skills'} subtitle={'Cutting-Edge Web Development Expertise'}></CommonSectionTitle>
            <Tabs>

                <TabList className={'flex justify-center gap-12'}>
                    {
                        tabs.map((tab, ind) => {
                            return <Tab key={ind}><motion.button onClick={() => { setCurrTab(tab) }}
                                whileHover={{ scale: 1.1, transition: { duration: .5 } }} whileTap={{ scale: 0.8 }} className={`${currTab === tab ? 'cmn-btn-two' : 'cmn-btn-two-outline'}`}> {tab}
                            </motion.button></Tab>
                        })
                    }

                </TabList>

                <div className='mt-16'>
                    {tabPanels.map((tabPanel, ind) => {
                        return <TabPanel key={ind}>
                            <div className='grid grid-cols-2 gap-4 font-bold'>

                                {
                                    tabPanel.map((skill, ind) =>
                                        <div key={ind} className='bg-slate-800 text-white bg-opacity-50 py-6 px-8 rounded relative'>
                                            {skill.tech}
                                            <div className={`absolute top-0 left-0 z-50 h-full bg-[#2ecc7034]`} style={{ width: `${skill.range}%` }}></div>
                                        </div>
                                    )
                                }


                            </div>
                        </TabPanel>
                    })}

                </div>

            </Tabs>
        </div>
    );
};

export default Skills;
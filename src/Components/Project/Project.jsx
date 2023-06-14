import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";


const Project = () => {
    const { id } = useParams()
    const [project, setProject] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    // load project data via id
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                const expectedProject = data.find(d => d._id === parseInt(id))
                setProject(expectedProject)
                setIsLoading(false)
            })

    }, [id])


    if (isLoading) {
        return <div className="h-screen flex items-center justify-center"><span className="h-16 w-16 rounded-full border-l-2 loading-spinner"></span></div>
    }

    return (
        <div>
            <div className="h-[70vh] flex items-center justify-center bg-slate-800 bg-blend-overlay bg-center bg-cover" style={{ backgroundImage: `url(${project.projectBanner})` }}>
                <motion.div
                    animate={{ x: 50 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <div className="text-center font-semibold space-y-6 w-5/6 lg:w-4/6 mx-auto">
                        <h2 className="cmn-title-one">{project.projectName}</h2>
                        <p>This page contains the case study of {project.projectName} Website which includes the Project Overview, Tools Used and Live Links to the official product.</p>
                        <Link to={project.liveLink} target="_blank"><motion.button whileHover={{ scale: 1.1, transition: { duration: .3 } }} whileTap={{ scale: 0.9 }} className='cmn-btn-one !mt-6'> Live Link </motion.button></Link>
                    </div>
                </motion.div>
            </div>
            <div className="my-container space-y-20">

                <motion.div
                    animate={{ y: 50, x:50, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 50 }}
                >
                    <figure>
                        <img className="mx-auto" src={project.projectImg} alt="" />
                    </figure>
                </motion.div>

                <div className="space-y-5">
                    <h2 className="cmn-title-one">Project Overview</h2>
                    <p>{project.projectOverview}</p>
                </div>

                <div className="space-y-5 !mb-16">
                    <h2 className="cmn-title-one">Tools Used</h2>
                    {
                        project.tools.map(p => <button className="btn btn-ghost mx-2 !text-white" disabled key={p}>{p}</button>)
                    }
                </div>

                <Link to={-1}><button className="cmn-btn-one">Go Back</button></Link>
            </div>

        </div>
    );
};

export default Project;
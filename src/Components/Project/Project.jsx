import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Project = () => {
    const {id} = useParams()
    const [project, setProject] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                const expectedProject = data.find(d => d._id === parseInt(id))
                setProject(expectedProject)
                setIsLoading(false)
            })

    }, [id])


    if(isLoading){
        return <div className="h-screen flex items-center justify-center"><span className="h-16 w-16 rounded-full border-l-2 loading-spinner"></span></div>
    }

    return (
        <div>
            <div className="h-[70vh] flex items-center justify-center bg-slate-800 bg-blend-overlay bg-center bg-cover" style={{backgroundImage: `url(${project.projectBanner})`}}>
                <div className="text-center font-semibold">
                    <h2 className="cmn-title-one">{project.projectName}</h2>
                    <p>This page contains the case study of {project.projectName} Website which includes the Project Overview, Tools Used and Live Links to the official product.</p>
                    <button className="cmn-btn-one">Live Link</button>
                </div>
            </div>
            <div className="my-container space-y-20">

               <figure>
               <img src={project.projectImg} alt="" />
               </figure>

                <div className="space-y-5">
                    <h2 className="cmn-title-one">Project Overview</h2>
                    <p>{project.projectOverview}</p>
                </div>

                <div className="space-y-5">
                    <h2 className="cmn-title-one">Tools Used</h2>
                    {
                        project.tools.map(p=> <button className="btn btn-ghost mx-2" disabled key={p}>{p}</button>)
                    }
                </div>

                <Link to={-1}><button className="cmn-btn-one">Go Back</button></Link>
            </div>

        </div>
    );
};

export default Project;
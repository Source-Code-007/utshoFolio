import { Link } from 'react-router-dom';
import CommonSectionTitle from '../../../HelpingCompo/CommonSectionTitle';
import spiceOfLifeMockup from '../../../assets/img/spiceOfLife.png'

const Projects = () => {
    return (
        <div className='py-20 my-container'>
            <CommonSectionTitle title={'projects'} subtitle={'Here you will find some of the personal and clients projects that I created with each project containing its own case study'}></CommonSectionTitle>
            <div className='grid grid-cols-2 gap-6 my-8'>
                <div>
                    <img src={spiceOfLifeMockup} alt="" />
                </div>
                <div className='flex items-center justify-center'>
                   <div className='space-y-4'>
                   <h2 className='font-bold text-4xl'>Spice Of Life</h2>
                    <p className='!mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam atque aliquid quae laboriosam cupiditate molestias dicta impedit! Nobis in doloremque illo esse ullam vero sint quam amet repudiandae praesentium.</p>
                   <Link to={'https://spice-of-life-48f62.web.app/'}> <button className='cmn-btn-one'>View Demo</button></Link>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
import CommonSectionTitle from '../../../HelpingCompo/CommonSectionTitle';
import me from '../../../assets/img/DSC_4848.jpg'

const About = () => {
    return (
        <div className='py-10 my-container relative min-h-screen'>
            <CommonSectionTitle title={'About me'} subtitle={'Driven by Innovation, Fueled by Imagination'}></CommonSectionTitle>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-10'>
                <div className='px-8'>
                    <h2 className='font-bold text-3xl mb-6 text-center'>A few words about me</h2>
                    <p className='text-slate-300 leading-8'>Hello, I'm Ahashan Habib Utsho, a passionate web developer hailing from Rangpur, Bangladesh. With a strong focus on Javascript, I take immense joy in creating dynamic web applications using this versatile language.
                    <br />
                    <br />
                     I have an insatiable thirst for knowledge and always embrace opportunities to learn and explore emerging technologies. My mission 
                     and vision is enhance technology. 
                     <br />
        
                     I have completed diploma with CSE. I'm open to exciting opportunities that align with my interests and expertise. Let's connect and embark on a journey of technological excellence together!</p>
                </div>
                <div className='px-8'>
                    <h2 className='font-bold text-3xl mb-6 text-center'>Can I help you?</h2>
                    <p className='text-slate-300 leading-8'>
                        Need a Website in Today's Tech-Driven World? Embrace the Power of Technology in Your Hands!
                        <br />
                        <br />
                        With my expertise in cutting-edge technologies like React, Tailwind, and Bootstrap, I'll create a captivating frontend experience. For seamless user authentication, I'm well-versed in leveraging the power of Firebase. Additionally, my knowledge of Express JS, a powerful Node JS framework, enables me to craft robust and efficient backend solutions. I can also integrate MongoDB to handle your database needs effectively.
                        <br />
                        <br />
                        Why wait? Take the leap and reach out to witness the magic firsthand. Together, we'll bring your vision to life in the digital realm!
                    </p>
                </div>
            </div>

            <img src={me} alt="" className='opacity-10 mx-auto absolute top-80 left-1/2 -translate-x-1/2 rounded-full h-96' />
        </div>
    );
};

export default About;
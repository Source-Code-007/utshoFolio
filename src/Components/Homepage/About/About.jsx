import CommonSectionTitle from '../../../HelpingCompo/CommonSectionTitle';
import me from '../../../assets/img/DSC_4848.jpg'

const About = () => {
    return (
        <div className='py-10 my-container relative min-h-[80vh]' id='about'>
            <CommonSectionTitle title={'About me'} subtitle={'Driven by Innovation, Fueled by Imagination'}></CommonSectionTitle>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-10'>
                <div className='px-8'>
                    <div className='text-center'>
                        <h2 className='font-bold inline-block text-3xl mb-6 relative before:h-px before:w-10 before:bg-[#e74c3c] before:absolute before:-left-16 before:top-5  after:h-px after:w-10 after:bg-[#e74c3c] after:absolute after:-right-16 after:top-5'>A few words about me</h2>
                    </div>
                    <p className='text-slate-300 leading-8'>Hello, I'm Ahashan Habib Utsho, a passionate web developer hailing from Rangpur, Bangladesh. With a strong focus on JavaScript, I always love building web applications using JavaScript.
                        <br />
                        <br />
                        I have an insatiable thirst for knowledge and always embrace opportunities to learn and explore emerging technologies. My mission
                        and vision is enhance technology.
                        <br />
                        <br />

                        I have completed diploma with CSE. I'm open to exciting opportunities that align with my interests and expertise. Let's connect and embark on a journey of technological excellence together!</p>
                </div>
                <div className='px-8'>
                <div className='text-center'>
                        <h2 className='font-bold inline-block text-3xl mb-6 relative before:h-px before:w-10 before:bg-[#e74c3c] before:absolute before:-left-16 before:top-5  after:h-px after:w-10 after:bg-[#e74c3c] after:absolute after:-right-16 after:top-5'>Can I help you?</h2>
                    </div>
                    <p className='text-slate-300 leading-8'>
                        Need a Website in Today's Tech-Driven World? Embrace the Power of Technology in Your Hands!
                        <br />
                        <br />
                        With expertise in React, Tailwind, and Bootstrap, I'll create captivating frontend experiences. Using Firebase, I ensure seamless user authentication. With Express JS, I develop robust backend solutions, and MongoDB integration allows effective database handling. Let's bring your vision to life with cutting-edge technology.
                        <br />
                        <br />
                        Why wait? Take the leap and reach out to witness the magic firsthand. Together, we'll bring your vision to life in the digital realm!
                    </p>
                </div>
            </div>

            <img src={me} alt="" className='opacity-10 mx-auto absolute top-80 left-1/2 -translate-x-1/2 rounded-full h-96 pointer-events-none' />
        </div>
    );
};

export default About;
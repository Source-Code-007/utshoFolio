/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from 'react-type-animation';
import testBg2 from '../../../assets/img/wave-haikei.svg'
const Banner = () => {
    return (
        <div className="min-h-screen bg-cover bg-center flex items-center text-white" style={{ backgroundImage: `url(${testBg2})` }}>
            <div className='pl-14'>
                <p className='font-semibold text-2xl mb-5'>Hello, I'm <span className='text-[#e74c3c] font-bold text-2xl'>UTSHO</span></p>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'A passionate Web Developer',
                        1000,
                        'A passionate Frontend Developer',
                        1000,
                        'A passionate Problem Solver ',
                        1000,
                    ]}
                    speed={50}
                    // style={{ fontSize: '2em' }}
                    className='font-bold text-5xl'
                    repeat={Infinity}
                />
            </div>
        </div>
    );
};

export default Banner;
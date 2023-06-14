/* eslint-disable react/prop-types */
const CommonSectionTitle = ({ title, subtitle }) => {
    return (
        <div className='py-10 space-y-4 w-5/6 md:w-4/6 lg:w-3/6 mx-auto text-center'>
            <div className="relative">
                <h2 className='font-bold text-5xl uppercase pb-5'>{title}</h2>
                <span className="absolute top-full left-1/2 -translate-x-1/2 h-1 w-16 bg-[#e74c3c]"></span>
            </div>
            <h2 className='text-xl'>{subtitle}</h2>
        </div>
    );
};

export default CommonSectionTitle;
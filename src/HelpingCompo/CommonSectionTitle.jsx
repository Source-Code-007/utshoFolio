/* eslint-disable react/prop-types */
const CommonSectionTitle = ({ title, subtitle }) => {
    return (
        <div className='py-10 space-y-3 w-5/6 md:w-4/6 lg:w-3/6 mx-auto text-center'>
                <h2 className='font-bold text-5xl uppercase pb-5 inline-block relative before:h-px before:w-16 before:bg-[#e74c3c] before:absolute before:-left-20 before:top-6  after:h-px after:w-16 after:bg-[#e74c3c] after:absolute after:-right-20 after:top-6'>{title}</h2>
            <p className='text-lg text-slate-300'>{subtitle}</p>
        </div>
    );
};

export default CommonSectionTitle;
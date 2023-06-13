/* eslint-disable react/prop-types */
const CommonSectionTitle = ({title, subtitle}) => {
    return (
        <div className='py-10 space-y-4 w-5/6 md:w-4/6 lg:w-3/6 mx-auto text-center'>
            <h2 className='font-bold text-5xl uppercase'>{title}</h2>
            <h2 className='text-xl'>{subtitle}</h2>
        </div>
    );
};

export default CommonSectionTitle;
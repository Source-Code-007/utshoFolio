import { FaArrowUp } from "react-icons/fa";

const Footer = () => {

    // handleToTopFunc
    const handleToTopFunc = ()=>{
        window.scrollTo({top:0, behavior: 'smooth'})
    }

    return (
        <div className=" bg-slate-800 bg-opacity-50 relative z-50">
            <p className="py-12 text-center text-lg text-slate-500 w-5/6 md:w-4/6 lg:w-3/6 mx-auto">A heartfelt thank you for exploring my portfolio. Your time and attention are greatly appreciated. Feel free to reach out if you have any questions or would like to connect!</p>
            <span onClick={handleToTopFunc} className="bg-[#e74d3c8d] hover:bg-[#e74c3c] transition p-5 absolute -top-7 rounded-full  left-1/2 -translate-x-1/2"> <FaArrowUp></FaArrowUp> </span>
        </div>
    );
};

export default Footer;
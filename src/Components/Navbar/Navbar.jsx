import MyActiveLink from "../../HelpingCompo/MyActiveLink";
import logo from '../../assets/img/utsho-logo.png'

const Navbar = () => {

    const menu = <>
        <li><MyActiveLink to={'/'}>Home</MyActiveLink></li>
        <li><MyActiveLink to={'/about'}>About</MyActiveLink></li>
        <li><MyActiveLink to={'/projects'}>Project</MyActiveLink></li>
        <li><MyActiveLink to={'/contact'}>Contacts</MyActiveLink></li>
    </>

    return (
        <div className="navbar bg-slate-800 bg-opacity-70 fixed">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img src={logo} className="w-16 h-auto" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="cmn-btn-one">Resume</button>
            </div>
        </div>
    );
};

export default Navbar;
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const MyActiveLink = ({to, children}) => {
    return <NavLink to={to} className={({isActive})=> `rounded-none text-slate-50 font-bold ${isActive? 'border-b-2 border-orange-500' : ''}`}>{children}</NavLink>
};

export default MyActiveLink;
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const CompoFromTop = ({ children }) => {
    const location = useLocation()

    useEffect(() => {
        if (location.pathname.split('/')[1]) {
            window.scrollTo(0, 0)
        }
    }, [location])

    return children
};

export default CompoFromTop;
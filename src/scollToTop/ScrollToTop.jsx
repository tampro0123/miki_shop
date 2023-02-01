import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        console.log("re-render");
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
        return;
    }, [pathname]);

    return null;
}

export default ScrollToTop;

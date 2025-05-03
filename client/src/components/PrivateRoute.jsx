import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
// import { useEffect } from "react";

export default function PrivateRoute() {
    const { currentUser } = useSelector((state) => state.user);
    // const { theme } = useSelector((state) => state.theme);

    // useEffect(() => {
    //     document.documentElement.setAttribute('data-theme', theme);
    // }, [theme]);

    return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
}

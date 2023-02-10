import { Outlet } from "react-router-dom";
import NavbarAll from "./Navbar";

export default function PageLayout() {
    return (
        <div>
            <NavbarAll />
            <Outlet />
        </div>
    );
};
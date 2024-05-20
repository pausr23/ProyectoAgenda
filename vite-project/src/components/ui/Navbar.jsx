import { NavLink } from "react-router-dom";
import "../../index.css";

export function Navbar(){
    return(
    <div className="flex p-5 justify-between relative">
    <nav className="flex items-center">
        <ul className="grid grid-flow-col content-center gap-12 pl-[80rem] ml-8 text-sm text-[#7193E3]">
            <li><NavLink to="/">Home </NavLink> </li>
            <li><NavLink to="/contact">Contact </NavLink> </li>
            <li><NavLink to="/about">About us </NavLink> </li>
            <li><NavLink to="/dashboard">Dashboard </NavLink> </li>
        </ul>
    </nav>
</div>

)

}
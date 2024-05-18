import "../../index.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export function Sidebar(){

    return(
        <div className="grid left bg-[#7193E3] w-[12%] h-[100vh]">
            <div className="text-center">
            
            <Link to="/profile">
            <img className="w-[11rem] pt-[7rem] pl-14" src="./src/assets/imgs/pp.png" alt="profile"/>
            </Link>
            
            <p className="font-semibold text-white text-base m-auto mt-2">Michael</p>
            <ul className="font-side text-md text-left pl-14 pt-24"> 
        <li className="pb-20 text-white"><NavLink to="/activities">Activities</NavLink></li>
        <li className="pb-20 text-white"><NavLink to="/dashboard">Dashboard</NavLink></li>
        <li className="pb-20 text-white"><NavLink to="/contact">Contact</NavLink></li>
        <li className="pb-20 text-white"><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink className="text-white" to="/">Log Out</NavLink></li>
    </ul>
            </div>
    </div>    

)

}
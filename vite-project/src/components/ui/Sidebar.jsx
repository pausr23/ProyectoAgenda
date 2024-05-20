import React from 'react';

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { SideBarMobile } from "../activity/SideBarMobile.jsx";

import "../../index.css";

export function SideBar(){

    return(

        <div>
            <div className="fixed hidden xl:block bg-indigo-400 text-white font-semibold h-screen">
                <img className="w-32 pb-3 pt-24 mx-auto" src="./src/assets/imgs/pp.png" alt="profile" />
                <p className="text-base m-auto text-center">Michael</p>
                <ul className="text-xl px-10 py-16 2xl:py-16"> 
                    <li className="pb-12 2xl:pb-16"><NavLink>Activities</NavLink></li>
                    <li className="pb-12 2xl:pb-16"><NavLink>Dashboard</NavLink></li>
                    <li className="pb-12 2xl:pb-16"><NavLink>Contact</NavLink></li>
                    <li className="pb-20 2xl:pb-16"><NavLink>About Us</NavLink></li>
                    <li className="pb-5 2xl:pb-7"><NavLink>Log Out</NavLink></li>
                </ul>
            </div>

        <SideBarMobile />

        </div>
        

)
}
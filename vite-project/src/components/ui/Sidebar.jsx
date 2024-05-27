import React from 'react';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { SideBarMobile } from "../activity/SideBarMobile.jsx";

import "../../index.css";

/**
 * Renders a sidebar component with a fixed position and hidden on extra large screens. 
 * The sidebar contains a profile picture, name, and a list of navigation links. 
 * The profile picture is a link to the "/profile" page. 
 * The name is displayed as "Michael" and is centered. 
 * The navigation links are displayed as a list with links to "/activities", "/dashboard", "/admin", "/about", and "/" pages. 
 * The component also renders a mobile version of the sidebar using the SideBarMobile component. 
 *
 * @return {JSX.Element} The rendered sidebar component.
 */
export function SideBar() {

    return (
            <div>
                <div className="fixed hidden xl:block bg-[#7193E3] text-white font-semibold h-screen">
                    <Link to="/profile">
                        <img className="w-32 pb-3 pt-24 mx-auto" src="./src/assets/imgs/pp.png" alt="profile" />
                    </Link>
                    <p className="text-base m-auto text-center">Michael</p>
                    <ul className="text-xl px-10 py-16 2xl:py-16">
                        <li className="pb-12 2xl:pb-16"><NavLink to="/activities">Activities</NavLink></li>
                        <li className="pb-12 2xl:pb-16"><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li className="pb-12 2xl:pb-16"><NavLink to="/admin">Admin</NavLink></li>
                        <li className="pb-20 2xl:pb-16"><NavLink to="/about">About Us</NavLink></li>
                        <li className="pb-5 2xl:pb-7"><NavLink to="/">Log out</NavLink></li>
                    </ul>
                </div>

                <SideBarMobile />

            </div>
    )
}
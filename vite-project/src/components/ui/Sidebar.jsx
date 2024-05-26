import React from 'react';

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { SideBarMobile } from "../activity/SideBarMobile.jsx";

import "../../index.css";

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
                    <li className="pb-12 2xl:pb-16"><NavLink to="/contact">Contact</NavLink></li>
                    <li className="pb-20 2xl:pb-16"><NavLink to="/about">About Us</NavLink></li>
                    <li className="pb-5 2xl:pb-7"><NavLink to="/">Log out</NavLink></li>
                </ul>
            </div>

            <SideBarMobile />

        </div>


    )
}
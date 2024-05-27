import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";

import { useCheckBox } from '../hooks/useCheckBox';

import "../../index.css";

/**
 * Renders a mobile sidebar component.
 *
 * @return {JSX.Element} The rendered mobile sidebar component.
 */
export function SideBarMobile () {

    const { mobileCheckboxChecked, setMobileCheckboxChecked } = useCheckBox();
    
    return (
            <div className="relative z-50">
                <input
                    className="hidden mobile-cb"
                    type="checkbox"
                    id="mobile-checkbox"
                    checked={mobileCheckboxChecked}
                    onChange={() => setMobileCheckboxChecked(!mobileCheckboxChecked)}
                />
                <label className="fixed py-12 left-6 z-40 h-8 cursor-pointer xl:hidden flex items-center justify-center" htmlFor="mobile-checkbox">
                    {mobileCheckboxChecked ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7193E3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </label>
        
                <div className={`relative xl:hidden top-0 left-0 w-full md:w-1/2 align-center z-50 transition-transform duration-350 nav-list ${
                    mobileCheckboxChecked ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
                    <div className="bg-[#7193E3] h-screen content-center grid fixed">
                        
                        <Link to="/profile">
                            <img className="w-24 pb-3 mx-auto mt-10" src="./src/assets/imgs/pp.png" alt="profile" />
                        </Link>
                        
                        <p className="text-base text-white text-center pb-6 font-semibold">Michael</p>
                        <ul className="text-white font-semibold text-lg px-10 py-10 mx-auto">
                        <li className="pb-12 md:pb-16 text-white"><NavLink to="/activities">Activities</NavLink></li>
                        <li className="pb-12 md:pb-16 text-white"><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li className="pb-12 md:pb-16 text-white"><NavLink to="/admin">Admin</NavLink></li>
                        <li className="pb-12 md:pb-16 text-white"><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink className="text-white" to="/">Log Out</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}
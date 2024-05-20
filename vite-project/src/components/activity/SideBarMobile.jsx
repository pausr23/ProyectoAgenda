import React from 'react';
import { useCheckBox } from '../hooks/useCheckBox';

import "../../index.css";
import { NavLink } from 'react-router-dom';

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
                <label className="fixed py-14 left-8 z-40 h-8 cursor-pointer xl:hidden flex items-center justify-center" htmlFor="mobile-checkbox">
                    <img className="mx-auto w-28" src="./src/assets/imgs/logo3.png" alt="logo" />
                </label>
    
                <div className={`relative xl:hidden top-0 left-0 w-full md:w-1/2 align-center z-50 transition-transform duration-350 nav-list ${
                    mobileCheckboxChecked ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
                    <div className="bg-indigo-400 h-screen content-center grid fixed">
                        <img className="pt-10 w-24 mx-auto" src="./src/assets/imgs/pp.png" alt="profile" />
                        <p className="text-base text-white text-center pb-6 font-semibold">Michael</p>
                        <ul className="text-white font-semibold text-lg px-10 py-10 mx-auto">
                            <li className="pb-12 md:pb-16"><NavLink>Activities</NavLink></li>
                            <li className="pb-12 md:pb-16"><NavLink>Dashboard</NavLink></li>
                            <li className="pb-12 md:pb-16"><NavLink>Contact</NavLink></li>
                            <li className="pb-20 md:pb-24"><NavLink>About Us</NavLink></li>
                            <li className='text-white'><NavLink>Log Out</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    
}
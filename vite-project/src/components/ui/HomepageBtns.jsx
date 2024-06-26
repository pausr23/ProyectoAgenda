import { Link } from "react-router-dom";

import "../../index.css";

/**
 * Renders the HomepageBtns component.
 *
 * @return {JSX.Element} The rendered HomepageBtns component.
 */
export function HomepageBtns(){

    return(
            <div className="absolute pl-8 lg:flex-row lg:items-end flex flex-col 2xl:bottom-[10rem] bottom-28 lg:bottom-[15rem] lg:space-x-6 space-y-6 ">
                <Link to="/signup">
                    <button className="bg-[#ED715F] border-[#ED715F] rounded-[10rem] border-4 px-14 py-2">
                        <h1 className="text-white font-semibold text-xl md:text-lg sm:text-md xs:text-sm">Sign up</h1>
                    </button>
                </Link>
                <Link to="/login">
                    <button className="bg-none border-white rounded-[10rem] border-4 px-16 py-2 mt-4">
                        <h1 className="text-white font-semibold text-xl md:text-lg sm:text-md xs:text-sm">Log in</h1>
                    </button>
                </Link>
            </div>
    )
}


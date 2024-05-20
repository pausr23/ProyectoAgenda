import { Link } from "react-router-dom";
import "../../index.css";

export function HomepageBtns(){
    return(
        <div className="relative pl-8 lg:flex lg:flex-row lg:items-end lg:content-stretch flex flex-col lg:space-x-6 md:space-y-6 sm:space-y-6 xs:space-y-6 md:bottom-[20rem] sm:bottom-[15rem] xs:bottom-[10rem] ">
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


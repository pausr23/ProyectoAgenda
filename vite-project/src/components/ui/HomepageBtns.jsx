import { Link } from "react-router-dom";
import "../../index.css";

export function HomepageBtns(){
    return(
        <div className="relative bottom-[25rem] pl-8 space-x-6">
            <Link to="/signup">
                <button className="bg-[#ED715F] border-[#ED715F] rounded-[10rem] border-4 px-14 py-2">
                    <h1 className="text-white font-semibold text-xl">Sign up</h1>
                </button>
            </Link>
            <Link to="/login">
                <button className="bg-none border-white rounded-[10rem] border-4 px-14 py-2">
                    <h1 className="text-white font-semibold text-xl">Log in</h1>
                </button>
            </Link>
        </div>
)

}
import { Link } from "react-router-dom";
import { InputField } from "../ui/InputField.jsx";

import "../../index.css";

export function LoginMobile() {

    return(

            <div className="xl:hidden grid items-center h-screen">
                <div className="px-10">
                    <Link to="/">
                        <img
                        className="mx-auto mb-6"
                        src="./src/assets/imgs/Logo.png"
                        alt="Logo"
                        />
                    </Link>

                <h1 className="text-center text-xl font-semibold mt-2 mb-2">Log in to your account</h1>

                <div className="md:w-[75%] grid mx-auto mt-10 ">

                    <form className="text-center mx-auto md:w-[80%]" action="">
                    <InputField className="py-3 p-5 rounded-md  bg-white w-full mb-4" type="text" id="profileUser" name="user" placeholder="User" />
                    <InputField className="py-3 p-5 rounded-md  bg-white w-full mb-4" type="password" id="profilePassword" name="password" placeholder="Password" />

                    <button
                        type="submit"
                        className="py-3 bg-[#E97258] text-white text-xl w-full rounded-xl mt-6"
                    >Log in
                    </button>
                        <div className="flex justify-end mt-3 mb-4 font-semibold">
                            <a href="#" className="text-[#928F8F]">
                            Forgot password
                            </a>
                        </div>
                        <p className="text-lg text-[#928F8F] font-semibold mt-10">Don't have an account?
                            <Link to="/signup" className="text-lg text-[#7193E3] font-semibold ml-2">Create one</Link>
                        </p>
                        </form>
                    </div>
                    </div>
                </div>
    )
}
import { Link } from "react-router-dom";
import { InputField } from "../ui/InputField.jsx";

import "../../index.css";

/**
 * Renders a mobile sign up form.
 *
 * @return {JSX.Element} The sign up form component.
 */
export function SingUpMobile(){

    return(
            <div className="xl:hidden grid items-center h-screen">
                <div className="px-10">
                    <Link to="/">
                        <img className="mx-auto mb-6" src="./src/assets/imgs/Logo.png" alt="Logo" />
                    </Link>
                    <h1 className="text-center text-xl font-semibold mt-2 mb-2">Sign up here</h1>
                <div className="md:w-[75%] grid mx-auto mt-10 ">
                    <form className="text-center mx-auto md:w-[80%]" action="">
                            <InputField className="py-2 p-5 rounded-md  bg-white w-full mb-4" type="text" id="mobileSignupName" name="name" placeholder="Name" />
                            <InputField className="py-2 p-5 rounded-md  bg-white w-full mb-4" type="text" id="mobileSignupLastName" name="lastname" placeholder="Lastname" />
                            <InputField className="py-2 p-5 rounded-md  bg-white w-full mb-4" type="text" id="mobileSignupUser" name="user" placeholder="User" />
                            <InputField className="py-2 p-5 rounded-md  bg-white w-full mb-4" type="text" id="mobileSignupEmail" name="email" placeholder="Email" />
                            <InputField className="py-2 p-5 rounded-md  bg-white w-full mb-4" type="password" id="mobileSignupPassword" name="password" placeholder="Password" />

                            <Link to="/questions">
                                <button type="submit" className="py-3 bg-[#E97258] text-white text-xl w-full rounded-xl mt-6">Sign up</button>
                            </Link>
                            <p className="text-lg text-[#928F8F] font-semibold mt-10">Already have an account?
                                <Link to="/login" className="text-lg text-[#7193E3] font-semibold ml-2">Log in</Link>
                            </p>
                    </form>
                </div>
                </div>
            </div>
    )
}



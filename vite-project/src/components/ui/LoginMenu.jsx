import { Link } from "react-router-dom";

import { InputField } from "../ui/InputField.jsx";
import { LoginMobile } from "./LoginMobile.jsx";

import "../../index.css";

/**
 * Renders the login menu component.
 *
 * @return {JSX.Element} The rendered login menu component.
 */
export function LoginMenu() {

    return (
            <div>
              <div className="hidden xl:block pt-16">
                <header className="grid items-center w-full p-8 grid-cols-2 relative">
                  <div className="text-center grid ml-12 text-3xl">
                    <Link to="/">
                      <img
                        className="w-[35%] mx-auto"
                        src="./src/assets/imgs/Logo.png"
                        alt="Logo"
                      />
                    </Link>
                    <p className="font-semibold mb-10 mt-4 text-2xl">Log in to your account</p>

                    <form action="" method="post" className="grid grid-cols-1 gap-2">
                      <InputField type="text" id="user" name="user" placeholder="User" />
                      <InputField type="password" id="password" name="password" placeholder="Password" />

                      <button className="text-white bg-[#E97258] w-[55%] text3xl rounded-3xl px-4 py-4 cursor-pointer mt-4 mx-auto" type="submit">Log in</button>
                      <div className="inline-block">
                        <a className="text-xl text-[#928F8F] font-semibold ml-[19rem]" href="signup.html">Forgot your password?</a>
                      </div>

                      <p className="text-2xl text-[#928F8F] font-semibold mt-10">Don't have an account?
                        <Link to="/signup" className="text-2xl text-[#7193E3] font-semibold ml-2">Create one</Link>
                      </p>
                    </form>
                  </div>

                  <div className="ml-auto lg:ml-[10rem] mr-[9rem] mt-16">
                    <h1 className="font-titles-secondary text-4xl 2xl:text-5xl text-left 2xl:leading-normal leading-relaxed text-white">We Are Delighted To Have You Joining Us</h1>
                    <p className="text-white mt-16 text-2xl 2xl:text-3xl text-left leading-relaxed 2xl:leading-normal">Your path towards a better future starts today, <br /> let’s create an account first! </p>
                  </div>
                </header>
              </div>

              <LoginMobile />
              
            </div>
    )
}
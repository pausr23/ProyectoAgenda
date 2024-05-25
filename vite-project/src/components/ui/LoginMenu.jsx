import { Link } from "react-router-dom";
import "../../index.css";
import { InputField } from "../ui/InputField.jsx";

export function LoginMenu() {
  return (
    <div>
      <div className="hidden xl:block pt-16">
        <header className="grid items-center w-[100%] p-[2rem] grid-cols-2 relative">
          <div className="text-center grid ml-[-3rem] text-3xl">
            <Link to="/">
              <img
                className="w-[35%] mx-auto"
                src="./src/assets/imgs/Logo.png"
                alt="Logo"
              />
            </Link>
            <p className="font-semibold mb-10 mt-[1rem] text-[1.5rem]">Log in to your account</p>

            <form action="" method="post" className="grid grid-cols-1 gap-2">
              <InputField type="text" id="email" name="email" placeholder="Email" />
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
              <InputField className="py-3 p-5 rounded-md  bg-white w-full mb-4" type="text" id="profileEmail" name="email" placeholder="Email" />
              <InputField className="py-3 p-5 rounded-md  bg-white w-full mb-4" type="password" id="profilePassword" name="password" placeholder="Password" />

              <button
                type="submit"
                className="py-3 bg-[#E97258] text-white text-xl w-full rounded-xl mt-6"
              >
                Log in
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
    </div>
  );
}
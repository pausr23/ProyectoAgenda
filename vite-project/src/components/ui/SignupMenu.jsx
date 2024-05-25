import { Link } from "react-router-dom";
import "../../index.css";
import { InputField } from "../ui/InputField.jsx";

export function SignupMenu() {
  return (
    <div>
      <div className="hidden xl:block pt-16">
        <header className="grid items-center w-[100%] p-[2rem] grid-cols-2 relative">
          <div className="text-center grid ml-[-3rem] text-3xl">
            <Link to="/">
              <img className="w-[35%] mx-auto" src="./src/assets/imgs/Logo.png" alt="Logo" />
            </Link>
            <p className="font-semibold mb-10 mt-[1rem] text-[1.5rem]">Sign up here</p>
            <form action="" method="post" className="grid grid-cols-1 gap-6">

              <InputField type="text" id="signupName" name="name" placeholder="Name" />
              <InputField type="text" id="signupEmail" name="email" placeholder="Email" />
              <InputField type="password" id="signupPassword" name="password" placeholder="Password" />

              <Link to="/questions">
                <button className="text-white bg-[#E97258] w-[55%] text3xl rounded-3xl px-4 py-4 cursor-pointer mt-4 mx-auto" type="submit">Sign up</button>
              </Link>
              <p className="text-2xl text-[#928F8F] font-semibold mt-10">Already have an account?
                <Link to="/login" className="text-2xl text-[#7193E3] font-semibold ml-2">Log in</Link>
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
            <img className="mx-auto mb-6" src="./src/assets/imgs/Logo.png" alt="Logo" />
          </Link>
          <h1 className="text-center text-xl font-semibold mt-2 mb-2">Sign up here</h1>
          <div className="md:w-[75%] grid mx-auto mt-10 ">
            <form className="text-center mx-auto md:w-[80%]" action="">

              <InputField className="py-3 p-5 rounded-md  bg-white w-full mb-4" type="text" id="mobileSignupName" name="name" placeholder="Name" />
              <InputField className="py-3 p-5 rounded-md  bg-white w-full mb-4" type="text" id="mobileSignupEmail" name="email" placeholder="Email" />
              <InputField className="py-3 p-5 rounded-md  bg-white w-full mb-4" type="password" id="mobileSignupPassword" name="password" placeholder="Password" />

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
    </div>
  );
}

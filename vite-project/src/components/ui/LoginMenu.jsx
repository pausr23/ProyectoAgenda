import { Link } from "react-router-dom";
import "../../index.css";

export function LoginMenu() {
  return (
    <div>
      <div className="hidden xl:block">
        
        <header className="grid items-center w-[100%] p-[2rem] grid-cols-2 relative">
          <div className="text-center grid ml-[-3rem] text-3xl">
            <Link to="/">
              <img
                className="w-[35%] mx-auto ml-[19.5rem] mt-[10rem]"
                src="./src/assets/imgs/Logo.png"
                alt="Logo"
              />
            </Link>
            <p className="font-semibold mb-10 mt-[1rem] text-[1.5rem]">Log in to your account</p>

            <form action="" method="post" className="grid grid-cols-1 gap-2"> 
              <input className="p-1 w-[55%] border-b-2 border-[#928F8F] mb-8 font-semibold text-2xl outline-none text-[#01244A] mx-auto" type="text" id="email" name="email" required placeholder="Email"/>
  
              <input className="p-1 w-[55%] border-b-2 border-[#928F8F] mb-8 font-semibold text-2xl outline-none text-[#01244A] mx-auto" type="password" id="password" name="password" required placeholder="Password"/>
  
              <button className="text-white bg-[#E97258] w-[55%] text3xl rounded-3xl px-4 py-4 cursor-pointer mt-4 mx-auto" type="submit">Log in</button>
              <div className="inline-block">
                  <a className="text-xl text-[#928F8F] font-semibold ml-[19rem]" href="signup.html">Forgot your password?</a>
              </div>
              
              <p className="text-2xl text-[#928F8F] font-semibold mt-10">Don't have an account? 
                  <Link to="/signup" className="text-2xl text-[#7193E3] font-semibold ml-2">Create one</Link>
              </p>
            </form>
          </div>

          <div className="ml-auto text-5xl mr-[9rem] mt-20">
            <h1 className="font-titles-secondary mb-4 text-left text-white">We Are Happy To See You</h1>
            <h1 className="font-titles-secondary mb-4 text-left">Once Again</h1>
            <p className="text-white mt-24 text-3xl text-left">Feel free to enter your information</p>
            <p className="text-white mt-2 text-3xl text-left">anytime and log back into our website!</p>
          </div>
          <img className="absolute right-0 top-0 h-full -z-10 pointer-events-none" src="./src/assets/imgs/square.png" alt="Design image"/>
        </header>
      </div>

      <div className="xl:hidden">
        
        <div className="flex justify-center items-center h-screen">
          <div className="xl:w-[700px] px-10 h-[400px]">
          <Link to="/">
              <img
                className="mb-6"
                src="./src/assets/imgs/Logo.png"
                alt="Logo"
              />
            </Link>
            
            <h1 className="text-center text-xl font-semibold mt-2 mb-2">Log in to your account</h1>

            <hr />
            <div className="flex justify-center mt-10">
              <form action="">
                <input
                  type="text"
                  name=""
                  id=""
                  className="py-3 p-5 rounded-md  bg-white md:w-[500px] w-[300px] bg-[#7193E3] mb-4"
                  placeholder="Email"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="py-3 p-5 rounded-md  bg-white md:w-[500px] w-[300px] bg-[#7193E3] mb-4"
                  placeholder="Password"
                />

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
    </div>
  );
}

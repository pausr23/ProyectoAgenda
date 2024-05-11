import { Link } from "react-router-dom";
import "../../index.css";

export function SignupMenu(){

    return(
        <header className="grid items-center w-[100%] p-[2rem] grid-cols-2 relative">
        <div className="text-center grid ml-[-3rem] text-3xl">
        <Link to="/">
                    <img className="w-[35%] mx-auto ml-[19.5rem] mt-[10rem]" src="./src/assets/imgs/Logo.png" alt="Logo"/>
                </Link>
            <p className="font-semibold mb-10 mt-[1rem] text-[1.5rem]">Sign up here</p>
            
            <form action="" method="post" className="grid grid-cols-1 gap-2"> 
                <input className="p-1 w-[55%] border-b-2 border-[#928F8F] mb-8 font-semibold text-2xl outline-none text-[#01244A] mx-auto" type="name" id="name" name="name" required placeholder="Name"/>
                <input className="p-1 w-[55%] border-b-2 border-[#928F8F] mb-8 font-semibold text-2xl outline-none text-[#01244A] mx-auto" type="text" id="email" name="email" required placeholder="Email"/>

                <input className="p-1 w-[55%] border-b-2 border-[#928F8F] mb-8 font-semibold text-2xl outline-none text-[#01244A] mx-auto" type="password" id="password" name="password" required placeholder="Password"/>


                <button className="text-white bg-[#E97258] w-[55%] text3xl rounded-3xl px-4 py-4 cursor-pointer mt-4 mx-auto" type="submit">Sign up</button>
                
                <p className="text-2xl text-[#928F8F] font-semibold mt-10">Already have an account? 
                    <Link to="/login" className="text-2xl text-[#7193E3] font-semibold ml-2">Log in</Link>
                </p>

            </form>
        </div>

        <div className="ml-auto text-5xl mr-[9rem] mt-[10rem]">
            <h1 className="font-titles-secondary mb-4 text-left text-white">We Are Delighted To Have</h1>
            <h1 className="font-titles-secondary mb-4 text-left">You Joining Us</h1>
            <p className="text-white mt-24 text-3xl text-left">Your path towards a better future starts</p>
            <p className="text-white mt-2 text-3xl text-left">today, let’s create an account first!</p>
        </div>
        <img className="absolute right-0 top-0 h-full -z-10 pointer-events-none" src="./src/assets/imgs/square.png" alt="Design image"/>
    </header>

)

}
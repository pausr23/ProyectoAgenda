import "../../index.css";

export function Header(){

    return(
 
   <header className="grid items-center w-[100%] p-[2rem] grid-cols-2 relative z-10">
    
        <div>

            <h1 className="mb-4 text-6xl mr-40 text-white">CALENDARLY</h1>
            <h2 className="text-xl text-white pt-5 font-semibold">Your personalized university guide, <br />
                always up-to-date</h2>
            <div className="pl-32 pt-36 space-x-4">
                <button className="bg-white border-[#E97258] rounded-3xl border-4 px-4 py-1 shadow-xl"onclick="window.location.href='login.html'">
                    <h1 className="text-[#E97258]">Log in</h1>
                </button>
                <button className="bg-[#E97258] border-[#E97258] rounded-3xl border-4 px-4 py-1 shadow-xl" onclick="window.location.href='signup.html'">
                    <h1 className="text-white">Sign up</h1>
                </button>
            </div>
        </div>
        <div className="align-bottom">
            <img className="pt-16" src="./src/assets/imgs/homepage_woman.png" alt="Homepage" />
        </div>
        
    </header>
    

)

}
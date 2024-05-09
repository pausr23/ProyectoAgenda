import "../../index.css";

export function SignupMenu(){

    return(
   <header className="grid items-center w-[100%] p-[2rem] grid-cols-2 relative">
    
        <div className="pb-[16rem]">
        <img src="./src/assets/imgs/logo2.png" alt="Logo" />
            <h2 className="text-3xl text-white pt-14">This is the sign up page</h2>
            <h2 className="text-3xl text-white pt-4"></h2>
        </div>
        <div className="align-bottom">
            <img className="pt-[16rem]" src="./src/assets/imgs/homepage_woman.png" alt="Homepage" />
        </div>
        
    </header>
    

)

}
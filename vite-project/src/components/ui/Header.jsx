import "../../index.css";

export function Header(){
    return(
        <header className="fixed grid items-center w-full p-8 grid-cols-1 md:grid-cols-2  pb-4 lg:pb-0">
             <div className="pb-12 md:pb-20 lg:pb-64">
                 <img src="./src/assets/imgs/logo2.png" alt="Logo" />
                 <h2 className="text-3xl text-white pt-14">Your personalized university guide</h2>
                 <h2 className="text-3xl text-white pt-4">always up-to-date</h2>
             </div>
             <div>
                 <img className="mx-auto pt-0 md:pt-64 hidden md:block" src="./src/assets/imgs/homepage_woman.png" alt="Homepage" />
             </div>
         </header>
     )
}
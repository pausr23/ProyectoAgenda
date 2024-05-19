import "../../index.css";

export function Header(){

    return(
        <header className="grid items-center w-[100%] p-[2rem] lg:grid-cols-2 relative md:grid-cols-1">
         
             <div className="lg:pb-[16rem] md:pb-[10rem] sm:pb-[5rem] xs:pb-[3rem]">
             <img src="./src/assets/imgs/logo2.png" alt="Logo" />
                 <h2 className="text-3xl text-white pt-14">Your personalized university guide</h2>
                 <h2 className="text-3xl text-white pt-4">always up-to-date</h2>
             </div>
             <div className="align-bottom">
                 <img className="lg:pt-[16rem] md:pt-0 hidden md:block" src="./src/assets/imgs/homepage_woman.png" alt="Homepage" />
             </div>
             
         </header>
     )
     

}
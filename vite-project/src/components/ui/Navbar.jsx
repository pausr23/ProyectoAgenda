import "../../index.css";

export function Navbar(){
    return(
    <div className="flex p-5 justify-between relative z-10">
    <a href="./index.html"><img class="cursor-pointer w-[7rem]" src="./src/assets/imgs/logo.png" alt="Logo" /></a>
    <nav className="flex items-center">
        <ul className="grid grid-flow-col content-center gap-12 ml-8 text-sm text-blue-800">
            <li><a href="">Home </a> </li>
            <li><a href="">Contact </a> </li>
            <li><a href="">About us </a> </li>
        </ul>
    </nav>
</div>

)

}
import { SideBar } from "../ui/SideBar.jsx";
import { MainContainer } from "../ui/MainContainer.jsx";


import "../../index.css";

export function Dashboard() {

    return (
     
        <div className="bg-color xl:grid-cols-[10%,85%] mx-auto grid md:gap-10">
            <>
                <SideBar />
                <MainContainer />
            </>
        </div>

    )
}
import { SideBar } from "../ui/SideBar.jsx";

import { MainContainerDash } from "../ui/MainContainerDash.jsx";


import "../../index.css";

export function Dashboard() {

    return (
     
        <div className="bg-color xl:grid-cols-[10%,85%] mx-auto grid md:gap-10">
            <>
                <SideBar />
                <MainContainerDash />
                
            </>
        </div>

    )
}
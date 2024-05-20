import { Sidebar } from "../ui/Sidebar.jsx";
import { MainContainer } from "../ui/MainContainer.jsx";


import "../../index.css";

export function Dashboard() {

    return (
     
        <div className="bg-color xl:grid-cols-[10%,85%] mx-auto grid md:gap-10">
            <>
                <Sidebar />
                <MainContainer />
            </>
        </div>

    )
}
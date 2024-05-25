import { Sidebar } from "../ui/Sidebar.jsx";
import { MainContainerDash } from "../ui/MainContainerDash.jsx";

export function Dashboard() {

    return (
     
        <div className="xl:grid-cols-[10%,85%] mx-auto flex lg:grid md:gap-10">
                <Sidebar />
                <MainContainerDash />
        </div>

    )
}
import { SideBar } from "../ui/SideBar.jsx";
import { ContainerActivities} from "../ui/ContainerActivities.jsx";

export function Activities() {
    return (
     
        <div className="xl:grid-cols-[10%,85%] mx-auto flex lg:grid md:gap-10">
                <SideBar />
                <ContainerActivities />
        </div>

    )
}
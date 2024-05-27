import { SideBar } from "../ui/SideBar.jsx";
import { MainContainerDash } from "../ui/MainContainerDash.jsx";

/**
 * Renders the Dashboard component.
 *
 * @return {JSX.Element} The rendered Dashboard component.
 */
export function Dashboard() {

    return (
            <div className="xl:grid-cols-[10%,85%] mx-auto flex lg:grid md:gap-10">
                    <SideBar />
                    <MainContainerDash />
            </div>
    )
}
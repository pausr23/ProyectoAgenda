import { SideBar } from "../ui/SideBar.jsx";
import { AdminContainer} from "../ui/AdminContainer.jsx";

/**
 * Renders the Admin component.
 *
 * @return {JSX.Element} The rendered Admin component.
 */
export function Admin() {

    return (
            <div className="xl:grid-cols-[10%,85%] mx-auto flex lg:grid md:gap-10">
                    <SideBar />
                    <AdminContainer />
            </div>
    )
}
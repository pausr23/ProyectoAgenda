import { SideBar } from "../ui/SideBar.jsx";
import { ProfilePage } from "../ui/ProfilePage.jsx";

/**
 * Renders the profile page component.
 *
 * @return {JSX.Element} The rendered profile page component.
 */
export function Profile() {
    
    return (
            <div className="flex bg-gray-100">
                <SideBar />
                <ProfilePage />
            </div>
    )
}
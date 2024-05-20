import { SideBar } from "../ui/SideBar.jsx";
import { ProfilePage } from "../ui/ProfilePage.jsx";

export function Profile() {
    return (
        <div className="flex bg-gray-100">
            <SideBar />
            <ProfilePage />
        </div>
)
}
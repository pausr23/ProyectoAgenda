import { Sidebar } from "../ui/Sidebar.jsx";
import { ProfilePage } from "../ui/ProfilePage.jsx";

export function Profile() {
    return (
        <div className="flex bg-gray-100">
            <Sidebar />
            <ProfilePage />
        </div>
    )
}
import { ActionButtons } from "./ActionButtons.jsx";
import { AdminContent } from "./AdminContent.jsx";

import "../../index.css";

/**
 * Renders the admin container component.
 *
 * @return {JSX.Element} The rendered admin container component.
 */
export function AdminContainer () {

    return(
            <div className="xl:grid-cols-2 xl:min-w-fit min-w-full">

                <ActionButtons />
                <AdminContent />
                
            </div>
    )
}
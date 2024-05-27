import { ActionButtons } from "./ActionButtons.jsx";
import { DashboardContent } from "./DashboardContent.jsx";

import "../../index.css";

/**
 * Renders the main container for the dashboard.
 *
 * @return {JSX.Element} The main container with action buttons and dashboard content.
 */
export function MainContainerDash () {

    return(
            <div className="xl:grid-cols-2 xl:min-w-fit min-w-full">

                <ActionButtons />
                <DashboardContent />
                
            </div>
    )
}
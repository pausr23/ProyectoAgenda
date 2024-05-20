import { ActionButtons } from "./ActionButtons.jsx";
import { DashboardContent } from "./DashboardContent.jsx";

import "../../index.css";

export function MainContainerDash () {

    return(

        <div className="xl:grid-cols-2 xl:min-w-fit min-w-full">

            <ActionButtons />
            <DashboardContent />
            
        </div>

    )
}
import { ActionButtons } from "./ActionButtons.jsx";
import { ActivitiesContent } from "./ActivitiesContent.jsx";

import "../../index.css";

export function ContainerActivities () {

    return(

        <div className="xl:grid-cols-2 xl:min-w-fit min-w-full">

            <ActionButtons />
            <ActivitiesContent />
            
        </div>

    )
}
import { ActionButtons } from "./ActionButtons.jsx";
import { ActivitiesContent } from "./ActivitiesContent.jsx";

import "../../index.css";

/**
 * ContainerActivities function component.
 *
 * This component renders a container with two columns. The first column contains the ActionButtons component,
 * and the second column contains the ActivitiesContent component.
 *
 * @return {JSX.Element} The rendered ContainerActivities component.
 */
export function ContainerActivities () {

    return(
            <div className="xl:grid-cols-2 xl:min-w-fit min-w-full">

                <ActionButtons />
                <ActivitiesContent />
                
            </div>
    )
}
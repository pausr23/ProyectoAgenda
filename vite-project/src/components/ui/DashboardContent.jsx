import { PendingTasks } from "./PendingTasks";
import { Calendarly } from "./Calendarly";
import { TasksSummary } from "./TasksSummary";
import { CoursesProgress } from "./CoursesProgress";

import "../../index.css";

/**
 * Renders the content of the dashboard.
 *
 * @return {JSX.Element} The JSX element representing the dashboard content.
 */
export function DashboardContent(){

    return(
            <div className="z-10 mx-auto min-w-full bg-white xl:rounded-2xl grid-cols-1 grid xl:grid-cols-[30%,20%,30%,20%]  2xl:gap-x-24 xl:gap-x-16 gap-y-8 xl:pl-8 pt-12">

                <PendingTasks />
                <Calendarly />
                <TasksSummary />
                <CoursesProgress />

            </div>
    )
}
import { SummaryCard } from "../ui/SummaryCard.jsx";

import "../../index.css";

/**
 * Renders a component that displays the weekly tasks completed by a user.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.details - An array of objects containing details of the completed tasks.
 * @param {string} props.details[].id - The unique identifier for each task.
 * @param {string} props.details[].courseName - The name of the course the task belongs to.
 * @param {string} props.details[].taskTitle - The title of the completed task.
 * @param {string} props.details[].date - The date the task was completed.
 * @return {JSX.Element} - The rendered component.
 */
export function WeeklyTasks({details}){

    return(
            <div class="md:pr-5 xl:pr-10 ">
                <h2 class="2xl:text-3xl text-2xl font-bold pb-14 xl:pb-5">You completed 5 tasks this week!</h2>
                <div class="overflow-y-auto max-h-52">
                   { details.map( detail => <SummaryCard key={detail.id} courseName={detail.courseName} taskTitle={detail.taskTitle} date={detail.date} />)}
                </div>   
            </div>
    )
}


            
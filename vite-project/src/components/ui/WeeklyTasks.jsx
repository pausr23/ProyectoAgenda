import { SummaryCard } from "./SummaryCard.jsx";
import "../../index.css";

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


            
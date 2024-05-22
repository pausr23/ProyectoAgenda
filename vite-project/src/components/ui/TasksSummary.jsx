import { WeeklyTasks } from "./WeeklyTasks";
import { DailyTasks } from "./DailyTasks";

import "../../index.css";

export function TasksSummary(){

    const weekly = [
        { "id":1, "courseName":"Programming", "taskTitle":"Code practice 3", "date":"April 11" },
        { "id":2, "courseName":"Design", "taskTitle":"Design Draft", "date":"April 12" },
        { "id":3, "courseName":"English", "taskTitle":"Lecture 4", "date":"April 13" },
        { "id":4, "courseName":"Programming", "taskTitle":"Code practice 4", "date":"April 11" },
        { "id":5, "courseName":"Programming", "taskTitle":"Code practice 5", "date":"April 11" },
    ]

    const daily = [
        { "id":1, "courseName":"Programming", "taskTitle":"Code practice 3", "date":"April 11" },
        { "id":2, "courseName":"Design", "taskTitle":"Design Draft", "date":"April 12" },
        { "id":3, "courseName":"English", "taskTitle":"Lecture 4", "date":"April 13" },
    ]

    return(

            <section class="mx-auto w-[74%] md:w-[80%] xl:min-w-full col-span-2 h-fit">              
                <div class=" md:grid-cols-2 grid p-4 text-gray-950"> 
                    <WeeklyTasks details={weekly}/>
                    <DailyTasks details={daily}/> 
                </div>
            </section>

    )
}

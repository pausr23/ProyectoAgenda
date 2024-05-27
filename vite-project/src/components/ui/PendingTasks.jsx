import { SwiperCards } from "../activity/SwiperCards";

import "../../index.css";

/**
 * Renders the PendingTasks component.
 *
 * @return {JSX.Element} The rendered PendingTasks component.
 */
export function PendingTasks(){

        const cards = [
            { "id":1, "course":"Web Design", "taskDescription":"Draft and moodboard of the final project", "daysLeft":"Today" },
            { "id":2, "course":"Web Design", "taskDescription":"Draft and moodboard of the final project", "daysLeft":"In 2 Days" },
            { "id":3, "course":"Web Design", "taskDescription":"Draft and moodboard of the final project", "daysLeft":"In 4 Days" },
            { "id":4, "course":"Web Design", "taskDescription":"Draft and moodboard of the final project", "daysLeft":"In 5 Days" },
            { "id":5, "course":"Web Design", "taskDescription":"Draft and moodboard of the final project", "daysLeft":"In 6 Days" }
        ];

        //Trafic Light function for text color
        const coloredTexts = cards.map(card => {
            let textColor = '';
            if (card.daysLeft.includes("Today")) {
                textColor = 'text-red-600'; //Red for "Today"
            } else if (card.daysLeft.includes("In 2") || card.daysLeft.includes("In 3")) {
                textColor = 'text-yellow-300'; //Yellow for "In 2 Days" or "In 3 Days"
            } else {
                textColor = 'text-lime-500'; //Green for "In 4 Days" or more
            }
            return { ...card, textColor };
        });

    return(
            <section className="mx-auto w-[74%] md:w-[80%] xl:min-w-full bg-indigo-400 grid grid-cols-[50%,50%] md:grid-cols-[30%,70%] col-span-2 rounded-2xl pb-10">
            <h1 className="text-white ml-6 text-2xl md:text-3xl font-semibold mt-10 leading-normal pr-4">Welcome, Michael! <span className="md:text-lg text-base"> <br />you have 4 pending <br />tasks to do.</ span> </h1>          
                <SwiperCards items={coloredTexts}/>
            </section >
    )
}
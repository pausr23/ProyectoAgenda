import { CardsCont } from "./CardsCont";
import { CardsDescription } from "./CardsDescription";

import "../../index.css";

/**
 * Renders an info card component with the given title, image, date, and description.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the info card.
 * @param {string} props.img - The image source for the info card.
 * @param {string} props.date - The date of the info card.
 * @param {string} props.description - The description of the info card.
 * @return {JSX.Element} - The rendered info card component.
 */
export function InfoCards({title, img, date, description}){

    return(
            <div className="bg-white w-72 shadow-2xl rounded-3xl mx-auto">
                <img className="rounded-t-3xl rounded-tr-3xl" src={`${img}`} alt="" />
                <h2 className="text-sm font-bold mt-5 ml-7 mb-5">{title}</h2>
                <div className="grid grid-cols-2 text-xs">

                    <CardsDescription />
                    <CardsCont />
                    
                </div>
            </div>
    )
}
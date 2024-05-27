import { MyDescriptions } from "../activity/MyDescriptions";

import "../../index.css";

/**
 * Renders a component that displays a list of descriptions in cards.
 *
 * @return {JSX.Element} A div element containing a MyDescriptions component with the descriptions data.
 */
export function CardsDescription(){

    const descriptions = [
        { "id":1, "icon":"https://img.icons8.com/ios/50/calendar--v1.png", "label":"August 23, 9:00 am" },
        { "id":2, "icon":"https://img.icons8.com/ios/50/speech-bubble--v1.png", "label":"Informatics and Multimedia innovating exposition" },
    ]

    return(
            <div>
                <MyDescriptions datas={descriptions}/>
            </div>
    )
}
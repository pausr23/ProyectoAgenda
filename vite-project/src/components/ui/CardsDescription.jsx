import "../../index.css";
import { MyDescriptions } from "./MyDescriptions";

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
import "../../index.css";
import { MyLabels } from "../activity/MyLabels";

export function CardsCont(){

    const labels = [
        { "id":1, "icon":"https://img.icons8.com/glyph-neue/64/give-way.png", "label":"Career" },
        { "id":2, "icon":"https://img.icons8.com/ios/50/bookmark-ribbon--v1.png", "label":"Event" },
        { "id":3, "icon":"https://img.icons8.com/ios-filled/50/FD7E14/filled-circle.png", "label":"Active" },
    ]


    return(

            <div>
                <MyLabels datas={labels}/>
            </div>
            

    )
}


                
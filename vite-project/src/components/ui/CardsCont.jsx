import { MyLabels } from "../activity/MyLabels";

import "../../index.css";

/**
 * Renders the CardsCont component which displays a list of labels with their corresponding icons and labels.
 *
 * @return {JSX.Element} The CardsCont component with a div containing a MyLabels component.
 */
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


                
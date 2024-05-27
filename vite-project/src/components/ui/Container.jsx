import { MyCategories } from "../activity/MyCategories";
import { Options } from "../activity/Options";
import { MyCards } from "../activity/MyCards";

import "../../index.css";

/**
 * Renders the main container for the application.
 *
 * @return {JSX.Element} The main container with categories, options, and cards.
 */
export function Container(){

    const categories = [
        { "id":1, "name":"Career", "img": "https://img.icons8.com/ios-filled/50/FFFFFF/open-book.png" },
        { "id":2, "name":"Course", "img": "https://img.icons8.com/ios/50/FFFFFF/online-group-studying.png" },
        { "id":3, "name":"University", "img": "https://img.icons8.com/ios-filled/50/FFFFFF/university.png" },
        { "id":4, "name":"Students", "img": "https://i.ibb.co/p1TpScQ/icons8-estudiante-masculino-50.png" },
        { "id":5, "name":"All", "img": "https://img.icons8.com/wired/64/FFFFFF/clipboard-list.png" },
    ]

    const option = [
        { "id":1, "name":"All" },
        { "id":2, "name":"Task" },
        { "id":3, "name":"Announcements" },
        { "id":4, "name":"Event" },
    ]

    const card = [
        { "id":1, "title":"ExpoMedia", "img": "https://i.ibb.co/r4m5BhJ/expo.jpg", "date":"August 23, 9:00 am", "description":"Informatics and Multimedia innovating exposition", "label":"Career", "label2":"Event", "label3":"Active" }, 
        { "id":2, "title":"ExpoMedia", "img": "https://i.ibb.co/r4m5BhJ/expo.jpg", "date":"August 23, 9:00 am", "description":"Informatics and Multimedia innovating exposition", "label":"Career", "label2":"Event", "label3":"Active" },
        { "id":3, "title":"ExpoMedia", "img": "https://i.ibb.co/r4m5BhJ/expo.jpg", "date":"August 23, 9:00 am", "description":"Informatics and Multimedia innovating exposition", "label":"Career", "label2":"Event", "label3":"Active" },
        { "id":4, "title":"ExpoMedia", "img": "https://i.ibb.co/r4m5BhJ/expo.jpg", "date":"August 23, 9:00 am", "description":"Informatics and Multimedia innovating exposition", "label":"Career", "label2":"Event", "label3":"Active" },
        { "id":5, "title":"ExpoMedia", "img": "https://i.ibb.co/r4m5BhJ/expo.jpg", "date":"August 23, 9:00 am", "description":"Informatics and Multimedia innovating exposition", "label":"Career", "label2":"Event", "label3":"Active" },
        { "id":6, "title":"ExpoMedia", "img": "https://i.ibb.co/r4m5BhJ/expo.jpg", "date":"August 23, 9:00 am", "description":"Informatics and Multimedia innovating exposition", "label":"Career", "label2":"Event", "label3":"Active" },
    ]


    return(
            <div>
                <MyCategories datas={categories}/>
                <Options datas={option}/>
                <MyCards datas={card}/>
            </div> 
    )
}


                
import { MyCategories } from "./MyCategories";
import { Options } from "./Options";

import "../../index.css";

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


    return(

            <div>
                <MyCategories datas={categories}/>
                <Options datas={option}/>
            </div>
            

    )
}


                
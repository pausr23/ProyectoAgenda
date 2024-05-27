import { MyButtons } from "../activity/MyButtons";

import "../../index.css";

/**
 * Renders the admin content component.
 *
 * @return {JSX.Element} The JSX element representing the admin content.
 */
export function AdminContent(){

    const button = [
        { "id":1, "name":"Add New Activity", "img":"https://i.ibb.co/CJ8D5bP/add.png"},
        { "id":2, "name":"Edit Activity", "img":"https://i.ibb.co/DgNxnsh/edit.png" },
        { "id":3, "name":"Delete Activity", "img":"https://i.ibb.co/dPz988t/delete.png" },
    ]

    return(
            <div className="bg-white rounded-2xl pt-12 pb-72">
                <h1 class="text-4xl font-bold mt-20 mb-16 ml-10">Activities</h1>
                <MyButtons datas={button}/>
            </div>
    )
}
import { MyButtons } from "../activity/MyButtons";


import "../../index.css";

export function AdminContent(){

    const button = [
        { "id":1, "name":"Add New Activity", "img":"https://i.ibb.co/CJ8D5bP/add.png"},
        { "id":2, "name":"Edit Activity", "img":"https://i.ibb.co/DgNxnsh/edit.png" },
        { "id":3, "name":"Delete Activity", "img":"https://i.ibb.co/dPz988t/delete.png" },
    ]

    return(

            <div className="bg-white pt-12 pb-72">
                <h1 class="text-4xl font-bold mt-20 mb-16 ml-10">Activities</h1>
                <MyButtons datas={button}/>
            </div>

    )
}
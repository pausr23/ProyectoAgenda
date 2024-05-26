import { MyCourses } from "../activity/MyCourses";

import "../../index.css";

export function CoursesProgress(){

    const progress = [
        { "id":1, "name":"Programming", "progress":"60% done, 40% left" },
        { "id":2, "name":"Programming", "progress":"60% done, 40% left" },
        { "id":3, "name":"Programming", "progress":"60% done, 40% left" },
        { "id":4, "name":"Programming", "progress":"60% done, 40% left" },
        { "id":5, "name":"Programming", "progress":"60% done, 40% left" },
    ]

    return(

            <section className="w-[74%] md:w-[80%] xl:w-[120%] mx-auto pb-6 2xl:pr-6">
                <MyCourses datas={progress}/>
            </section>

    )
}


                
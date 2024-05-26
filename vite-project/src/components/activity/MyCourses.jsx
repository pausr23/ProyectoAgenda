import { CoursesPorcentage } from "../ui/CoursePorcentage";

import "../../index.css";

export function MyCourses({datas}){

    return(

            <div className="mx-auto md:mx-4 border-2 grid border-gray-300 bg-white rounded-3xl">
                <h2 className="text-black text-xl font-bold mb-3 mt-5 ml-8">My Courses progress</h2>
                    { datas.map( data => <CoursesPorcentage key={data.id} name={data.name} progress={data.progress} />)}
            </div>

    )
}


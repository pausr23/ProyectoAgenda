import { CoursesPorcentage } from "../ui/CoursePorcentage";

import "../../index.css";

/**
 * Renders a component that displays the progress of a user's courses.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.datas - An array of objects containing course data.
 * @param {string} props.datas[].id - The unique identifier for each course.
 * @param {string} props.datas[].name - The name of the course.
 * @param {string} props.datas[].progress - The progress of the course.
 * @return {JSX.Element} - The rendered component.
 */
export function MyCourses({datas}){

    return(
            <div className="mx-auto md:mx-4 border-2 grid border-gray-300 bg-white rounded-3xl">
                <h2 className="text-black text-xl font-bold mb-3 mt-5 ml-8">My Courses progress</h2>
                    { datas.map( data => <CoursesPorcentage key={data.id} name={data.name} progress={data.progress} />)}
            </div>
    )
}


import "../../index.css";

/**
 * Renders a select dropdown component with options for selecting a career, course, university, students, or event.
 * Also renders another select dropdown component with options for selecting a task, announcements, or event.
 *
 * @return {JSX.Element} The rendered select dropdown components.
 */
export function SelectAdd(){

    return(
            <div className="grid grid-cols-1">
                <select className="border p-1 rounded mt-14 mb-14 w-28 bg-sky-100">
                    <option value="opcion1">Career</option>
                    <option value="opcion2">Course</option>
                    <option value="opcion3">University</option>
                    <option value="opcion4">Students</option>
                    <option value="opcion5">Event</option>
                </select>
        
                <select className="border p-1 rounded mb-14 w-28 bg-sky-100">
                    <option value="opcion1">Task</option>
                    <option value="opcion2">Announcements</option>
                    <option value="opcion3">Event</option>
                </select>
            </div>
    )
}
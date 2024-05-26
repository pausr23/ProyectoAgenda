
import "../../index.css";

export function SelectAdd(){

    return(

        <div className="grid grid-cols-1">
            <select className="border p-1 rounded mt-14 mb-14 w-28 bg-sky-100">
                <option value="opcion1">Career</option>
                <option value="opcion2">Course</option>
                <option value="opcion3">University</option>
                <option value="opcion1">Students</option>
                <option value="opcion1">Event</option>
            </select>
    
            <select className="border p-1 rounded mb-14 w-28 bg-sky-100">
                <option value="opcion2">Task</option>
                <option value="opcion3">Announcements</option>
                <option value="opcion1">Event</option>
             </select>
        </div>


    )
}
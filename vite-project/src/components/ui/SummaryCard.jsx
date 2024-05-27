//import library to set required props
import PropTypes from 'prop-types'
import "../../index.css";

/**
 * Renders a summary card component with the given course name, task title, and date.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.courseName - The name of the course.
 * @param {string} props.taskTitle - The title of the task.
 * @param {string} props.date - The date of the task.
 * @return {JSX.Element} - The rendered summary card component.
 */
export function SummaryCard({courseName, taskTitle, date}){

    return(
            <div class="pb-3">
                <div class="border-2 border-gray-300 bg-white rounded-2xl grid-cols-1 grid items-center px-5 py-3">
                    <p class="text-orange-500 font-bold text-lg">{courseName}</p>
                    <p class="text-sm text-gray-950 font-bold">{taskTitle}</p>
                    <p class="text-xs text-slate-500 text-end">{date}</p>
                </div>
            </div>
    )
}
//set required props
SummaryCard.propTypes = {
    courseName: PropTypes.string.isRequired,
    taskTitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}

//set default values for props
SummaryCard.defaultProps = {
    courseName: 'Summary Card course name',
    taskTitle: 'Summary Card task title',
    date: 'Summary Card date',
}


                



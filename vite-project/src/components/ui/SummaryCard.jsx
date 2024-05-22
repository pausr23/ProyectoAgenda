import PropTypes from 'prop-types'
import "../../index.css";

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


                



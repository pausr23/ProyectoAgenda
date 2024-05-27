import PropTypes from 'prop-types'

import "../../index.css";

/**
 * Renders a card component with the given course, task description, days left, and text color.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.course - The name of the course.
 * @param {string} props.taskDescription - The description of the task.
 * @param {string} props.daysLeft - The number of days left for the task.
 * @param {string} props.textColor - The color of the text.
 * @return {JSX.Element} - The rendered card component.
 */
export function Card({course, taskDescription, daysLeft, textColor}){

    return(
            <div className="swiper-slide bg-white text-gray-950 font-semibold pt-6 pb-3 px-5 rounded-2xl mt-10 h-60">
                <h2 className="md:text-xl text-lg pb-6 2xl:pb-9">{course}</h2>
                <p className="xl:text-sm 2xl:text-base">{taskDescription}</p>
                <p className={`text-xl font-bold xl:my-2 2xl:my-4 my-6 ${textColor}`}>{daysLeft}</p>
            </div> 
    )  
}

//set default values for props
Card.propTypes = {
    course: PropTypes.string.isRequired,
    taskDescription: PropTypes.string.isRequired,
    daysLeft: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
}

//set default values for props
Card.defaultProps = {
    course: 'Card course',
    taskDescription: 'Card task description',
    daysLeft: 'Card days left',
    textColor: 'Card text color'
}
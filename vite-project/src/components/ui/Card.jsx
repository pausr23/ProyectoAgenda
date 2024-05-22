import PropTypes from 'prop-types'

import "../../index.css";

export function Card({course, taskDescription, daysLeft, textColor}){

    return(
            <div className="swiper-slide bg-white text-gray-950 font-semibold pt-6 pb-3 px-5 rounded-2xl mt-10 h-60">
                <h2 className="md:text-xl text-lg pb-6 2xl:pb-9">{course}</h2>
                <p className="xl:text-sm 2xl:text-base">{taskDescription}</p>
                <p className={`text-xl font-bold xl:my-2 2xl:my-4 my-6 ${textColor}`}>{daysLeft}</p>
            </div> 
    )  
}

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
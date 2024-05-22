import PropTypes from 'prop-types'

import "../../index.css";

export function CoursesPorcentage({name, progress}){

    return(

            <div className="md:text-center mb-3 md:mx-8">
                <div className="grid md:grid-cols-2 ml-8 md:ml-0 font-semibold" >
                    <h2 className="text-black text-base text-start">{name}</h2>
                    <p className="text-black text-xs py-3 md:py-0">{progress}</p>
                </div>
                <div className="xl:w-[90%] md:w-full w-[80%] h-2 bg-gray-200 rounded-full mx-auto md:mx-0">
                    <div className="h-full bg-orange-500 rounded-full w-[60%]"></div>
                </div>
            </div>

    )
}

CoursesPorcentage.propTypes = {
    name: PropTypes.string.isRequired,
    progress: PropTypes.string.isRequired,
}

//set default values for props
CoursesPorcentage.defaultProps = {
    name: 'Courses Porcentage name',
    progress: 'Courses Porcentage progress',
}



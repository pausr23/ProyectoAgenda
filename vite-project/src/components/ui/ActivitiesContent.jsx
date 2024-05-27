import { Container } from "./Container";

import "../../index.css";

/**
 * Renders the ActivitiesContent component.
 *
 * @return {JSX.Element} The rendered ActivitiesContent component.
 */
export function ActivitiesContent(){

    return(
            <div className="bg-white rounded-2xl grid-cols-1 grid text-white pt-12 mb-20">

                <Container />

            </div>
    )
}
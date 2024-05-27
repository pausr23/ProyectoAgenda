import { CalendarInteract } from "../activity/CalendarInteract";

import "../../index.css";

/**
 * A React functional component that renders a calendar.
 *
 * @return {JSX.Element} A section element containing a CalendarInteract component.
 */
export function Calendarly(){

    return(
            <section className="mx-auto">
                <CalendarInteract/>
            </section>
    )
}
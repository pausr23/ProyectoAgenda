import { FirstAdd } from "./FirstAdd";
import { SecondAdd } from "./SecondAdd";

import "../../index.css";

/**
 * Renders the ContentAdd component.
 *
 * @return {JSX.Element} The rendered ContentAdd component.
 */
export function ContentAdd(){

    return(

            <div className="bg-white rounded-2xl pt-12 pb-72">
                <h1 className="text-4xl font-bold mt-20 mb-12 ml-10">Activities</h1>
                <div className="grid md:grid-cols-2 xs:grid-cols-1">
                    <FirstAdd />
                    <SecondAdd />
                </div>
            </div>

    )
}
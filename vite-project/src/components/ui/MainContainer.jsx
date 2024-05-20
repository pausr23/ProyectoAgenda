import { ActionButtons } from "./ActionButtons.jsx";

import "../../index.css";

export function MainContainer () {

    return(

        <div className="xl:grid-cols-2 xl:min-w-fit min-w-full">

            <ActionButtons />
            
        </div>

    )
}
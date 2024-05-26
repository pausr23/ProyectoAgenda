import { ActionButtons } from "./ActionButtons.jsx";
import { ContentAdd } from "./ContentAdd.jsx";

import "../../index.css";

export function AddCont () {

    return(

        <div className="xl:grid-cols-2 xl:min-w-fit min-w-full">

            <ActionButtons />
            <ContentAdd />
            
        </div>

    )
}
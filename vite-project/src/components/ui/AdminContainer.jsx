import { ActionButtons } from "./ActionButtons.jsx";
import { AdminContent } from "./AdminContent.jsx";

import "../../index.css";

export function AdminContainer () {

    return(

        <div className="xl:grid-cols-2 xl:min-w-fit min-w-full">

            <ActionButtons />
            <AdminContent />
            
        </div>

    )
}
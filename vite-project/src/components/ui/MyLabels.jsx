import { NewLabel } from "./NewLabel";

import "../../index.css";

export function MyLabels({datas}){

    return(

            <div>
                { datas.map( data => <NewLabel key={data.id} icon={data.icon} label={data.label} />)}
            </div>

    )
}

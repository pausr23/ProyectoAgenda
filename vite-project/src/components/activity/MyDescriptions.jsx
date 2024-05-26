import { NewDescription } from "../ui/NewDescription";

import "../../index.css";

export function MyDescriptions({datas}){

    return(

            <div>
                { datas.map( data => <NewDescription key={data.id} icon={data.icon} label={data.label} />)}
            </div>

    )
}
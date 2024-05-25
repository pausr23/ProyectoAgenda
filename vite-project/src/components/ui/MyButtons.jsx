import { ButtonsAdmin } from "./ButtonsAdmin";

import "../../index.css";

export function MyButtons({datas}){

    return(

        <div className="flex flex-wrap justify-center xs:items-center">
            { datas.map( data => <ButtonsAdmin key={data.id} name={data.name} img={data.img} />)}
        </div>

    )
}
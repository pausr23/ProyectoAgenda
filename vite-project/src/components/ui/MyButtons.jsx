import { ButtonsAdmin } from "./ButtonsAdmin";

import "../../index.css";

export function MyButtons({datas}){

    return(

        <div className="grid grid-cols-1 lg:flex lg:flex-wrap justify-center ">
            { datas.map( data => <ButtonsAdmin key={data.id} name={data.name} img={data.img} />)}
        </div>

    )
}
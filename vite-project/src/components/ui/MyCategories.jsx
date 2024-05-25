import { ButtonsCategories } from "./ButtonsCategories";

import "../../index.css";

export function MyCategories({datas}){

    return(

            <div className="grid gap-y-6 md:grid-cols-5 mt-16">
                { datas.map( data => <ButtonsCategories key={data.id} name={data.name} img={data.img} />)}
            </div>

    )
}


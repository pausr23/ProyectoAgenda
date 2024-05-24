import { InfoCards } from "./InfoCards";

import "../../index.css";

export function MyCards({datas}){

    return(

            <div className="grid gap-9 text-black mb-5 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
                { datas.map( data => <InfoCards key={data.id} title={data.title} img={data.img} date={data.date} description={data.description} label={data.label} label2={data.label2} label3={data.label3} />)}
            </div>

    )
}
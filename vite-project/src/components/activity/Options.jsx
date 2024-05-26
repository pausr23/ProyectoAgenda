import { OptionCategories } from "../ui/OptionsCategories";

import "../../index.css";

export function Options({datas}){

    return(

            <select className="border p-1 rounded-xl bg-indigo-400 mt-14 mb-14 ml-16">
                { datas.map( data => <OptionCategories key={data.id} name={data.name} />)}
            </select>

    )
}


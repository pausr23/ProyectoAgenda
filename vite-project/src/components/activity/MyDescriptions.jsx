import { NewDescription } from "../ui/NewDescription";

import "../../index.css";

/**
 * Renders a list of NewDescription components based on the provided data.
 *
 * @param {Object[]} datas - An array of data objects containing the properties for each NewDescription component.
 * @param {string} datas[].id - The unique identifier for each data object.
 * @param {string} datas[].icon - The icon to be displayed in each NewDescription component.
 * @param {string} datas[].label - The label to be displayed in each NewDescription component.
 * @return {JSX.Element} - The rendered list of NewDescription components.
 */
export function MyDescriptions({datas}){

    return(
            <div>
                { datas.map( data => <NewDescription key={data.id} icon={data.icon} label={data.label} />)}
            </div>
    )
}
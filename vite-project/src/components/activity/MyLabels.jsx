import { NewLabel } from "../ui/NewLabel";

import "../../index.css";

/**
 * Renders a list of NewLabel components based on the provided data.
 *
 * @param {Object} props - The properties object.
 * @param {Object[]} props.datas - An array of data objects containing the properties for each NewLabel component.
 * @param {string} props.datas[].id - The unique identifier for each data object.
 * @param {string} props.datas[].icon - The icon to be displayed in each NewLabel component.
 * @param {string} props.datas[].label - The label to be displayed in each NewLabel component.
 * @return {JSX.Element} - The rendered list of NewLabel components.
 */
export function MyLabels({datas}){

    return(
            <div>
                { datas.map( data => <NewLabel key={data.id} icon={data.icon} label={data.label} />)}
            </div>
    )
}

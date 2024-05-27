import { OptionCategories } from "../ui/OptionsCategories";

import "../../index.css";

/**
 * Renders a select dropdown component with options based on the provided data.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.datas - An array of objects containing the data for each option.
 * @param {string} props.datas[].id - The unique identifier for each data object.
 * @param {string} props.datas[].name - The name of the option.
 * @return {JSX.Element} - The rendered select dropdown component.
 */
export function Options({datas}){

    return(
            <select className="border p-1 rounded-xl bg-indigo-400 mt-14 mb-14 ml-16">
                { datas.map( data => <OptionCategories key={data.id} name={data.name} />)}
            </select>
    )
}


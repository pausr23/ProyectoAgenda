import { ButtonsCategories } from "../ui/ButtonsCategories";

import "../../index.css";

/**
 * Renders a grid of ButtonsCategories components based on the provided data.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.datas - An array of objects containing data for each ButtonsCategories component.
 * @param {number} props.datas[].id - The unique identifier for each data object.
 * @param {string} props.datas[].name - The name to be displayed in each ButtonsCategories component.
 * @param {string} props.datas[].img - The image URL to be displayed in each ButtonsCategories component.
 * @return {JSX.Element} A div containing a grid of ButtonsCategories components.
 */
export function MyCategories({datas}){

    return(
            <div className="grid gap-y-6 md:grid-cols-5 mt-16">
                { datas.map( data => <ButtonsCategories key={data.id} name={data.name} img={data.img} />)}
            </div>
    )
}


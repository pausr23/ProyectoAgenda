import { ButtonsAdmin } from "../ui/ButtonsAdmin";

import "../../index.css";

/**
 * Renders a grid of ButtonsAdmin components based on the provided data.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.datas - An array of objects containing data for each ButtonsAdmin component.
 * @param {number} props.datas[].id - The unique identifier for each data object.
 * @param {string} props.datas[].name - The name to be displayed in each ButtonsAdmin component.
 * @param {string} props.datas[].img - The image URL to be displayed in each ButtonsAdmin component.
 * @return {JSX.Element} A div containing a grid of ButtonsAdmin components.
 */
export function MyButtons({datas}){

    return(
            <div className="grid grid-cols-1 gap-y-6 lg:flex lg:flex-wrap justify-center ">
                { datas.map( data => <ButtonsAdmin key={data.id} name={data.name} img={data.img} />)}
            </div>
    )
}
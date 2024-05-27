import { InfoCards } from "../ui/InfoCards";

import "../../index.css";

/**
 * Renders a grid of InfoCards components based on the provided data.
 *
 * @param {Object} props - The props object containing the following properties:
 *   - datas: An array of objects representing the data for each InfoCard. Each object should have the following properties:
 *     - id: A unique identifier for the InfoCard.
 *     - title: The title of the InfoCard.
 *     - img: The image source for the InfoCard.
 *     - date: The date of the InfoCard.
 *     - description: The description of the InfoCard.
 *     - label: The label of the InfoCard.
 *     - label2: The second label of the InfoCard.
 *     - label3: The third label of the InfoCard.
 * @return {JSX.Element} A div element containing a grid of InfoCards components.
 */
export function MyCards({datas}){

    return(
            <div className="grid gap-9 text-black mb-5 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
                { datas.map( data => <InfoCards key={data.id} title={data.title} img={data.img} date={data.date} description={data.description} label={data.label} label2={data.label2} label3={data.label3} />)}
            </div>
    )
}
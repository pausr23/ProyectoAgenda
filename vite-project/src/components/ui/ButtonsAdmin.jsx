import { Link } from "react-router-dom";

import "../../index.css";

/**
 * Renders a button component with a link to the "/add" route. The button has a background color, rounded corners, and a shadow. The button's size and margin are responsive. When hovered over, the button's background color changes to orange. When clicked, the button's background color changes to a darker shade of orange.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.name - The name to be displayed on the button.
 * @param {string} props.img - The URL of the image to be displayed on the button.
 * @return {JSX.Element} The rendered button component.
 */
export function ButtonsAdmin({ name, img }) {

    return (
            <Link to="/add">
                    <button className="w-32 h-44 bg-indigo-300 rounded-lg shadow-2xl md:w-44 md:h-56 mx-20 hover:bg-orange-500 active:bg-orange-700">
                        <img class="mx-auto" src={`${img}`} alt="icon" />
                        <h2 class="font-semibold">{name}</h2>
                    </button>
            </Link>
    )
}
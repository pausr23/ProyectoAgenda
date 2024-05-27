import "../../index.css";

/**
 * Renders a description component with an icon and a text label.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.icon - The source of the icon image.
 * @param {string} props.label - The text label.
 * @return {JSX.Element} - The rendered description component.
 */
export function NewDescription({icon, label}){

    return(
            <div className="grid grid-cols-2">
                <img className="w-4 mx-auto" src={`${icon}`} />
                <h2 className="mb-2">{label}</h2>
            </div>
    )
}
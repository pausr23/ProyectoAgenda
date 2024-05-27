import "../../index.css";

/**
 * Renders an option element with the given name as its value.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.name - The name to be displayed as the option's value.
 * @return {JSX.Element} - The rendered option element.
 */
export function OptionCategories({name}){

    return(
            <option value="opcion1">{name}</option>
    )
}
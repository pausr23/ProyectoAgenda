import "../../index.css";

/**
 * Renders a mobile input field component.
 *
 * @param {Object} props - The properties for the input field.
 * @param {string} props.type - The type of the input field.
 * @param {string} props.id - The id of the input field.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @return {JSX.Element} The mobile input field component.
 */
export const MobileInputField = ({ type, id, name, placeholder }) => {

    return (
            <input
                type={type}
                name={name}
                id={id}
                className="py-3 p-5 rounded-md  bg-white md:w-[500px] w-[300px] mb-4"
                placeholder={placeholder}
            />
    )
}

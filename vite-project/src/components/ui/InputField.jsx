import "../../index.css";

/**
 * Renders an input field component with customizable styling and attributes.
 *
 * @param {Object} props - The properties for the input field.
 * @param {string} props.type - The type of the input field.
 * @param {string} props.id - The id of the input field.
 * @param {string} props.name - The name of the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {string} [props.className] - The custom class name for the input field.
 * @return {JSX.Element} The rendered input field component.
 */
export function InputField({ type, id, name, placeholder, className }) {

    const defaultClass = "p-1 w-[55%] pl-3 rounded-t-lg border-b-2 border-[#928F8F] 2xl:mb-8 mb-4 font-semibold text-2xl outline-none text-[#01244A] mx-auto";

    return (
            <input
                className={className || defaultClass}
                type={type}
                id={id}
                name={name}
                required
                placeholder={placeholder}
            />
    )
}

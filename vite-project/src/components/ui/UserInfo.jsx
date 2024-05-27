import "../../index.css";

/**
 * Renders a component that displays user information.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the user information.
 * @param {string} props.info - The information to be displayed.
 * @return {JSX.Element} - The rendered user information component.
 */
export function UserInfo({ title, info }) {
    return (
            <div className="grid grid-cols-2 space-x-16 mt-14 text-left">
                <p className="text-2xl mt-2 text-gray-500">{title}</p>
                <p className="text-xl mt-2">{info}</p>
            </div>
    )
}

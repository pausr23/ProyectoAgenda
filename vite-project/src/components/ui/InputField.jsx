import "../../index.css";

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
    );
}

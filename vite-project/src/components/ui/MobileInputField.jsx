import "../../index.css";

export const MobileInputField = ({ type, id, name, placeholder }) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            className="py-3 p-5 rounded-md  bg-white md:w-[500px] w-[300px] mb-4"
            placeholder={placeholder}
        />
    );
};

import "../../index.css";

export const QuestionsInputField = ({ type, id, name, placeholder, info }) => {
    return (
        <div className="grid grid-cols-2 mt-14 text-left">
            <p className="text-xl mt-2 text-gray-500">{info}</p>
            <input
                className={type === 'text' ? " p-1 w-[100%] xl:border-b border-[#928F8F]  font-semibold text-xl outline-none text-[#01244A] mx-auto" : "py-3 p-5 rounded-md  bg-white md:w-[500px] w-[300px] mb-4"}
                type={type}
                id={id}
                name={name}
                required
                placeholder={placeholder}
            />
        </div>
    );
};
import "../../index.css";

export function UserInfo({ title, info }) {
    return (
        <div className="grid grid-cols-2 space-x-16 mt-14 text-left">
            <p className="text-2xl mt-2 text-gray-500">{title}</p>
            <p className="text-xl mt-2">{info}</p>
        </div>
    );
}

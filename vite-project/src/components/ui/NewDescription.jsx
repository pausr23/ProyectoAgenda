import "../../index.css";

export function NewDescription({icon, label}){

    return(
        <div className="grid grid-cols-2">
            <img className="w-4 mx-auto" src={`${icon}`} />
            <h2 className="mb-2">{label}</h2>
        </div>

    )
}
import "../../index.css";

export function ButtonsCategories({name, img}){

    return(

        <button className="bg-indigo-400 rounded-lg drop-shadow-lg w-36 h-10 hover:bg-orange-500 active:bg-orange-700 focus:bg-orange-500 grid grid-cols-2 mx-auto">
            <img className="w-8 mx-auto" src={`${img}`} alt="img" />
            <h3 className="text-xs font-bold mt-2">{name}</h3>
        </button>

    )
}
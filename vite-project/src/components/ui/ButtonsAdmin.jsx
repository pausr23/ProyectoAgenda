import "../../index.css";

export function ButtonsAdmin({name, img}){

    return(

        <button class="xs:mb-16 xs:w-32 xs:h-44 bg-indigo-300 rounded-lg shadow-2xl w-44 h-56 mx-20 hover:bg-orange-500 active:bg-orange-700">
            <img class="mx-auto" src={`${img}`} alt="icon" />
            <h2 class="font-semibold">{name}</h2>
        </button>
        
    )
}
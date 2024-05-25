import "../../index.css";

export function ButtonsAdmin({ name, img }) {

    return (

        <button class="w-32 h-44 bg-indigo-300 rounded-lg shadow-2xl md:w-44 md:h-56 mx-20 hover:bg-orange-500 active:bg-orange-700">
            <img class="mx-auto" src={`${img}`} alt="icon" />
            <h2 class="font-semibold">{name}</h2>
        </button>

    )
}
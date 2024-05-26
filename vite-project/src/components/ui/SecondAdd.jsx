
import "../../index.css";

export function SecondAdd(){

    return(

        <div className="ml-10 mb-10">
            
            <div className="mb-14 grid grid-cols-1">
                <label className="text-2xl font-bold mb-3">Date</label>
                <input id="date" type="month" className="drop-shadow-xl w-40 rounded-md px-2 py-1 mt-2 bg-sky-100" />
            </div>

       
            <div className="mb-14 grid grid-cols-1">
                <label className="text-2xl font-bold mb-3">Time</label>
                <input id="time" type="time" className="drop-shadow-xl w-24 rounded-md px-2 py-1 mt-2 bg-sky-100" />
            </div>     

  
            <div className="grid grid-cols-1">
                <label className="text-2xl font-bold mb-3">Image</label>
                <input className="bg-sky-100 w-96 drop-shadow-xl xs:w-72" type="file" onchange="readURL(this)" />
            </div>

        </div>

    )
}
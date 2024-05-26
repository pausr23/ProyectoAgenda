import { SelectAdd } from "./SelectAdd";
import "../../index.css";

export function FirstAdd(){

    return(

            <div className="ml-10">
                <div className="grid grid-cols-1">
                    <label className="text-2xl font-bold mb-3">Name</label>
                    <input className="rounded drop-shadow-xl bg-sky-100 w-52" type="text" name="name" id="" />
                </div>

                <SelectAdd/>

                <div className="mb-14 grid grid-cols-1">
                    <label className="text-2xl font-bold mb-3">Description</label>
                    <textarea className="bg-sky-100 w-80" name="Description" id="" cols="30" rows="5"></textarea>
                </div>
            </div>

    )
}
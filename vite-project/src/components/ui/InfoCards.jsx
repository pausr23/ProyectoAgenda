
import "../../index.css";
import { CardsCont } from "./CardsCont";
import { CardsDescription } from "./CardsDescription";

export function InfoCards({title, img, date, description}){

    return(

        <div className="bg-white w-72 shadow-2xl rounded-3xl mx-auto">
            <img className="rounded-t-3xl rounded-tr-3xl" src={`${img}`} alt="" />
            <h2 className="text-sm font-bold mt-5 ml-7 mb-5">{title}</h2>
            <div className="grid grid-cols-2 text-xs">
                <CardsDescription />
                <CardsCont />
             </div>
        </div>

    )
}
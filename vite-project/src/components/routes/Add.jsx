import { SideBar } from "../ui/SideBar.jsx";
import { AddCont} from "../ui/AddCont.jsx";

export function Add() {

    return (
     
        <div className="xl:grid-cols-[10%,85%] mx-auto flex lg:grid md:gap-10">
                <SideBar />
                <AddCont />
        </div>

    )
}
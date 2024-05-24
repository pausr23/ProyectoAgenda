
import "../../index.css";

export function InfoCards({title, img, date, description, label, label2, label3}){

    return(

        <div className="bg-white w-72 shadow-2xl rounded-3xl mx-auto">
            <img className="rounded-t-3xl rounded-tr-3xl" src={`${img}`} alt="" />
            <h2 className="text-sm font-bold mt-5 ml-7 mb-5">{title}</h2>
            <div className="grid grid-cols-2 text-xs">
                <div>
                    <div className="grid grid-cols-2">
                        <img className="w-4 mx-auto" src="https://img.icons8.com/ios/50/calendar--v1.png" alt="img" />
                        <h3 className="mb-2">{date}</h3>
                    </div>
                    <div className="grid grid-cols-2">
                        <img className="w-4 mx-auto" src="https://img.icons8.com/ios/50/speech-bubble--v1.png" alt="img" />
                        <p className="mb-2">{description}</p>
                    </div>
                </div>
                <div>
                    <div class="grid grid-cols-2">
                        <img class="w-4 mx-auto" src="https://img.icons8.com/glyph-neue/64/give-way.png" />
                        <h2 class="mb-2">{label}</h2>
                     </div>
                    <div class="grid grid-cols-2">
                        <img class="w-4 mx-auto" src="https://img.icons8.com/ios/50/bookmark-ribbon--v1.png" />
                        <h2 class="mb-2">{label2}</h2>
                    </div>
                    <div class="grid grid-cols-2">
                        <img class="w-4 mx-auto" src="https://img.icons8.com/ios-filled/50/FD7E14/filled-circle.png" />
                        <h2 class="mb-2">{label3}</h2>
                    </div>
                </div>
             </div>
        </div>

    )
}
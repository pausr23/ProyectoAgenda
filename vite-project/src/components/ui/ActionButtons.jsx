import "../../index.css";

/**
 * Renders the ActionButtons component.
 *
 * @return {JSX.Element} The rendered ActionButtons component.
 */
export function ActionButtons () {

    return(
            <>
                <div className="relative z-30">
                    <div className="xl:hidden bg-color fixed top-0 right-0 py-10 w-full h-16 z-30">
                        <button className="float-right pr-10"><img src="https://img.icons8.com/ios-glyphs/30/228BE6/chat.png" alt="#" /></button>
                        <button className="float-right pr-9"><img src="https://img.icons8.com/material-rounded/30/228BE6/appointment-reminders.png" alt="#" /></button>
                    </div>
                </div>

                <div className="py-10 flex gap-10 justify-end">
                    <button ><img className="hidden xl:block" src="https://img.icons8.com/ios-glyphs/30/228BE6/chat.png" alt="#" /></button>
                    <button className="mr-9"><img className="hidden xl:block" src="https://img.icons8.com/material-rounded/30/228BE6/appointment-reminders.png" alt="#" /></button>
                </div>
            </>
    )
}
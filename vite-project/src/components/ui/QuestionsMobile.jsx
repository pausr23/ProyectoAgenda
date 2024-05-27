import { MobileInputField } from "./MobileInputField.jsx";

import "../../index.css";

/**
 * Renders a mobile view for setting up health details.
 *
 * @return {JSX.Element} The JSX element representing the mobile view.
 */
export function QuestionsMobile(){
    
    return(
            <div className="xl:hidden">
                <div className="flex justify-center items-center h-screen">
                <div className="xl:w-[700px] pt-4 px-10">

                    <img
                    className=" w-[30%] mx-auto"
                    src="./src/assets/imgs/pp.png"
                    alt="profile"
                    />

                    <h1 className="text-center text-2xl font-bold mt-6 mb-2">Set up Health Details</h1>
                    <h2 className="text-center text-lg  mt-6">Michael Johnson</h2>
                    <h2 className="text-center text-lg  mt-4 mb-2">Michael@gmail.com</h2>

                    <div className="flex justify-center mt-10 ">
                    <form action="" className="grid justify-items-center">
                        <MobileInputField type="text" id="" name="" placeholder="Height" />
                        <MobileInputField type="text" id="" name="" placeholder="Weight" />
                        <MobileInputField type="text" id="" name="" placeholder="Sleep hours" />
                        <MobileInputField type="text" id="" name="" placeholder="Health Conditions" />

                        <button
                        type="submit"
                        className="py-3  border border-[#7193E3]  text-[#7193E3] text-xl w-[19rem] rounded-3xl mt-3 grid"
                        >
                        Submit
                        </button>

                    </form>
                    </div>
                </div>
                </div>
            </div>
    )
}
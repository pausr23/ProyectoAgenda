import "../../index.css";
import { QuestionsInputField } from "../ui/QuestionsInputField.jsx";
import { MobileInputField } from "../ui/MobileInputField.jsx";

export function QuestionsPage() {
  return (
    <div>
      <div className="hidden xl:block ">
        <div className="mx-auto items-center h-[100vh] grid ipad:ml-40">
          <div className=" w-[75rem] h-[46rem] bg-white rounded-2xl flex p-16 ipad:w-[50rem] ipad:h-[30rem]">
            <h2 className="text-3xl pr-10 font-semibold leading-loose">Set up <br /> Health Details</h2>
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img className="object-cover object-center h-32" src="./src/assets/imgs/pp.png" alt="Profile picture" />
            </div>

            <div className="text-center mt-4 ml-10">
              <div className="grid grid-cols-2 text-left">
                <p className="text-xl mt-2 text-gray-500 text-left">Name</p>
                <p className="text-2xl">Michael Johnson</p>
              </div>

              <div className="grid grid-cols-2 mt-14 text-left">
                <p className="text-xl mt-2 text-gray-500 text-left">Email</p>
                <p className="text-2xl">Michael@gmail.com</p>
              </div>

              <QuestionsInputField type="text" id="height" name="height" placeholder="Height" info="Height" />
              <QuestionsInputField type="text" id="weight" name="weight" placeholder="Weight" info="Weight" />
              <QuestionsInputField type="text" id="hours" name="ehours" placeholder="Hours" info="Sleep hours" />
              <QuestionsInputField type="text" id="condition" name="condition" placeholder="Condition" info="Health conditions" />

              <div className="text-left">
                <button className="border border-[#7193E3] text-[#7193E3] rounded-3xl px-6 py-2 hover:bg-[#7193E3] hover:text-white transition duration-500 ease mt-14 m-0">
                  <p>Submit</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </div>

  )

}
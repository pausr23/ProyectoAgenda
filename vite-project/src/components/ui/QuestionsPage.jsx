import { QuestionsInputField } from "./QuestionsInputField.jsx";
import { QuestionsMobile } from "./QuestionsMobile.jsx";

import "../../index.css";

/**
 * Renders the QuestionsPage component.
 *
 * @return {JSX.Element} The rendered QuestionsPage component.
 */
export function QuestionsPage() {
  
  return (
            <div>
              <div className="hidden xl:block ">
                <div className="mx-auto items-center h-[100vh] grid">
                  <div className=" w-[75rem] h-[46rem] bg-white rounded-2xl flex p-16">
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

                <QuestionsMobile />

            </div>
    )
}
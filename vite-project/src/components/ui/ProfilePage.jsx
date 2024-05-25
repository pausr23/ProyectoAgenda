import { Link } from "react-router-dom";
import "../../index.css";

export function ProfilePage(){

    return(
        <div> 
              <div className="hidden xl:block mx-auto">
              <div className="items-center h-[100vh] pl-16 grid ml-80">
              <div className="w-[70rem] h-[46rem] bg-white rounded-2xl flex p-16 ">
          <div className="w-32 h-32 rounded-full overflow-hidden">
              <img className="object-cover object-center h-32" src="./src/assets/imgs/pp.png" alt="Profile picture"/>
          </div>
          
          <div className="mt-4 ml-20  ">
              <div className="grid grid-cols-2 space-x-16 text-left">
              <p className="text-2xl  mt-2 text-gray-500 text-left">Name</p>
              <p className="text-xl mt-2">Michael Johnson</p>
              </div>

              <div className="grid grid-cols-2 space-x-16 mt-14 text-left">
              <p className="text-2xl mt-2 text-gray-500 text-left">Email</p>
              <p className="text-xl mt-2">Michael@gmail.com</p>
              </div>

              <div className="grid grid-cols-2 space-x-16 mt-14 text-left">
              <p className="text-2xl mt-2 text-gray-500">Height</p>
              <p className="text-xl mt-2">164cm</p>
              </div>

              <div className="grid grid-cols-2 space-x-16 mt-14 text-left">
              <p className="text-2xl mt-2 text-gray-500">Weight</p>
              <p className="text-xl mt-2">60kg</p>
              </div>

              <div className="grid grid-cols-2 space-x-16 mt-14 text-left">
              <p className="text-2xl mt-2 text-gray-500">Sleeps</p>
              <p className="text-xl mt-2">6hr per day</p>
              </div>

              <div className="grid grid-cols-2 space-x-16 mt-14 text-left">
              <p className="text-2xl mt-2 text-gray-500">Health conditions</p>
              <p className="text-xl mt-2">Alergic to water</p>
              </div>

            <div className="text-left">
            <button className="border border-red-400 text-red-400 rounded-3xl px-6 py-2 hover:bg-red-400 hover:text-white transition duration-500 ease mt-14 m-0">
            <p>Delete account</p>
          </button>
              <Link to="/questions">
              <button className=" ml-6 border border-[#7193E3] text-[#7193E3] rounded-3xl px-6 py-2 hover:bg-[#7193E3] hover:text-white transition duration-500 ease mt-14 m-0">
            <p>Edit account</p>
          </button>
              </Link>
            </div>

          </div>
          
        </div>
        
      </div>
              </div>

              <div className="xl:hidden md:pl-60 fixed pt-20 h-screen">
                <div className=" px-10">
                  <img
                    className="mx-auto w-[30%] mt-5 pb-10"
                    src="./src/assets/imgs/pp.png"
                    alt="profile"
                  />
                
                  <div className="text-left mb-8 flex justify-between items-center w-full">
                    <p className="md:text-xl text-sm mt-1 text-gray-500">Name</p>
                    <p className="md:text-lg text-md pr-[5.25rem]">Michael Johnson</p>
                  </div>
                  <div className="text-left mb-8 flex justify-between items-center w-full">
                    <p className="md:text-xl text-sm mt-1 text-gray-500">Email</p>
                    <p className="md:text-lg text-md">MichaelJohnson@gmail.com</p>
                  </div>
                  <div className="text-left mb-8 flex justify-between items-center w-full">
                    <p className="md:text-xl text-sm mt-1 text-gray-500">Height</p>
                    <p className="md:text-lg text-md pr-[9.5rem]">170cm</p>
                  </div>
                  <div className="text-left mb-8 flex justify-between items-center w-full">
                    <p className="md:text-xl text-sm mt-1 text-gray-500">Weight</p>
                    <p className="md:text-lg text-md pr-[10.25rem]">68kg</p>
                  </div>
                  <div className="text-left mb-8 flex justify-between items-center w-full">
                    <p className="md:text-xl text-sm mt-1 text-gray-500">Sleep hours</p>
                    <p className="md:text-lg text-md pr-44">6hr</p>
                  </div>
                  <div className="text-left flex justify-between items-center w-full mb-10">
                    <p className="md:text-xl text-sm mt-1 text-gray-500">Conditions</p>
                    <p className="md:text-lg text-md pr-[5.25rem]">Allergic to water</p>
                  </div>
                  <div className="flex flex-row gap-6">
                              <button
                                type="submit"
                                className="py-2  border border-[#7193E3]  text-[#7193E3] text-lg w-[9rem] rounded-3xl grid "
                              >
                                Edit account
                              </button>

                              <button
                                type="submit"
                                className="py-2  border border-red-400  text-red-400 text-lg w-[9rem] rounded-3xl grid "
                              >
                                Delete account
                              </button>
                  </div>
                </div>

              </div>

</div>

)

}
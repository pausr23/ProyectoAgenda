
import "../../index.css";

export function QuestionsPage(){

    return(
        <div className="flex justify-center items-center h-[100vh] pl-16">
        <div className="w-[75rem] h-[46rem] bg-white rounded-2xl flex p-16">
    <div className="w-32 h-32 rounded-full overflow-hidden">
        <img className="object-cover object-center h-32" src="./src/assets/imgs/pp.png" alt="Profile picture"/>
    </div>
    
    <div className="text-center mt-4 ml-20">
        <div className="grid grid-cols-2 text-left">
        <p className="text-xl mt-2 text-gray-500 text-left">Name</p>
        <p className="text-3xl font-semibol">Michael Johnson</p>
        </div>

        <div className="grid grid-cols-2 mt-14 text-left">
        <p className="text-xl mt-2 text-gray-500 text-left">Email</p>
        <p className="text-3xl font-semibol">Michael@gmail.com</p>
        </div>

        <div className="grid grid-cols-2 mt-14 text-left">
        <p className="text-xl mt-2 text-gray-500">Height</p>
        <input className=" p-1 w-[100%] border-b border-[#928F8F]  font-semibold text-2xl outline-none text-[#01244A] mx-auto" type="text" id="height" name="height" required placeholder="Height"/>
        </div>

        <div className="grid grid-cols-2 mt-14 text-left">
        <p className="text-xl mt-2 text-gray-500">Weight</p>
        <input className=" p-1 w-[100%] border-b border-[#928F8F]  font-semibold text-2xl outline-none text-[#01244A] mx-auto" type="text" id="weight" name="weight" required placeholder="Weight"/>
        </div>

        <div className="grid grid-cols-2 mt-14 text-left">
        <p className="text-xl mt-2 text-gray-500">Sleeps</p>
        <input className=" p-1 w-[100%] border-b border-[#928F8F] font-semibold text-2xl outline-none text-[#01244A] mx-auto" type="text" id="hours" name="ehours" required placeholder="Hours"/>
        </div>

        <div className="grid grid-cols-2 mt-14 text-left">
        <p className="text-xl mt-2 text-gray-500">Health conditions</p>
        <input className=" p-1 w-[100%] border-b border-[#928F8F]  font-semibold text-2xl outline-none text-[#01244A] mx-auto" type="text" id="condition" name="condition" required placeholder="Condition"/>
        </div>

       <div className="text-left">
       <button className="border border-[#7193E3] text-[#7193E3] rounded-3xl px-6 py-2 hover:bg-[#7193E3] hover:text-white transition duration-500 ease mt-14 m-0">
			<p>Submit</p>
		</button>
       </div>

    </div>
    
  </div>
  
</div>

)

}
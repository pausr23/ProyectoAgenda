
import "../../index.css";

export function QuestionsPage(){

    return(
        <div> 
            <div className="hidden xl:block">
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
        <p className="text-xl mt-2 text-gray-500">Sleep hours</p>
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
</div>

<div className="xl:hidden">
        
        <div className="flex justify-center items-center h-screen">
          <div className="xl:w-[700px] px-10 h-[600px]">
          
              <img
                className=" w-[30%] mx-auto mt-5"
                src="./src/assets/imgs/pp.png"
                alt="profile"
              />
            
            
            <h1 className="text-center text-xl  mt-6 mb-2">Michael Johnson</h1>
            <h1 className="text-center text-xl  mt-4 mb-2">Michael@gmail.com</h1>

            <hr />
            <div className="flex justify-center mt-10">
              <form action="">
                <input
                  type="text"
                  name=""
                  id=""
                  className="py-3 p-5 rounded-md  bg-white md:w-[500px] w-[300px] bg-[#7193E3] mb-4"
                  placeholder="Height"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="py-3 p-5 rounded-md  bg-white md:w-[500px] w-[300px] bg-[#7193E3] mb-4"
                  placeholder="Weight"
                />
                 <input
                  type="text"
                  name=""
                  id=""
                  className="py-3 p-5 rounded-md  bg-white md:w-[500px] w-[300px] bg-[#7193E3] mb-4"
                  placeholder="Sleep hours"
                />
                 <input
                  type="text"
                  name=""
                  id=""
                  className="py-3 p-5 rounded-md  bg-white md:w-[500px] w-[300px] bg-[#7193E3] mb-4"
                  placeholder="Healt Conditions"
                />

                <button
                  type="submit"
                  className="py-3  border border-[#7193E3]  text-[#7193E3] text-xl w-[19rem] rounded-xl mt-6 grid "
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
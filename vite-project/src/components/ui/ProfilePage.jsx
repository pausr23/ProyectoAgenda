import "../../index.css";

export function ProfilePage(){

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
        <p className="text-3xl font-semibol">164cm</p>
        </div>

        <div className="grid grid-cols-2 mt-14 text-left">
        <p className="text-xl mt-2 text-gray-500">Weight</p>
        <p className="text-3xl font-semibol">60kg</p>
        </div>

        <div className="grid grid-cols-2 mt-14 text-left">
        <p className="text-xl mt-2 text-gray-500">Sleeps</p>
        <p className="text-3xl font-semibol">6hr per day</p>
        </div>

        <div className="grid grid-cols-2 mt-14 text-left">
        <p className="text-xl mt-2 text-gray-500">Health conditions</p>
        <p className="text-3xl font-semibol">Alergic to water</p>
        </div>

       <div className="text-left">
       <button className="border border-red-400 text-red-400 rounded-3xl px-6 py-2 m-2 hover:bg-red-600 hover:text-white transition duration-500 ease mt-14 m-0">
			<p>Delete account</p>
		</button>
       </div>

    </div>
    
  </div>
  
</div>

)

}
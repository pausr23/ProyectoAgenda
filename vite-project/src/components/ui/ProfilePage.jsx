import { Link } from "react-router-dom";
import "../../index.css";

export function ProfilePage() {
  const userData = [
    { "title": "Name", "info": "Michael Johnson" },
    { "title": "Email", "info": "Michael@gmail.com" },
    { "title": "Height", "info": "164cm" },
    { "title": "Weight", "info": "60kg" },
    { "title": "Sleep hours", "info": "6hr per day" },
    { "title": "Health conditions", "info": "Alergic to water" }
  ];

  return (
    
    <div>
      <div className="hidden xl:block ">
        <div className="items-center h-[100vh] mx-auto 2xl:ml-80 grid lg:ml-52">
          <div className="w-[70rem] h-[46rem] bg-white rounded-2xl flex p-16 ">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img className="object-cover object-center h-32" src="./src/assets/imgs/pp.png" alt="Profile picture" />
            </div>
            <div className="mt-4 ml-20">
              {userData.map((item, index) =>
                <div className="grid grid-cols-2 space-x-16 text-left mt-10" key={index}>
                  <p className="text-2xl text-gray-500 text-left">{item.title}</p>
                  <div>
                  <p className="text-2xl">{item.info}</p>
                  <div className="w-full h-1 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              )}

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

      <div className="xl:hidden mx-auto fixed pt-20 h-screen">
        <div className="bg-white md:mt-28 rounded-xl md:w-[60%] py-10 md:px-32 px-10 md:mx-56 grid">
          <img
            className="mx-auto w-[30%] pb-10"
            src="./src/assets/imgs/pp.png"
            alt="profile"
          />
          {userData.map((item, index) =>
            <div className="grid grid-cols-2 space-x-4" key={index}>
              <p className="md:text-2xl text-lg pb-6 text-gray-500">{item.title}</p>
              <div>
              <p className="md:text-xl text-md">{item.info}</p>
              <div className="w-full h-1 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          )}
          <div className="flex mx-auto flex-row md:gap-20 gap-6">
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
  );
}
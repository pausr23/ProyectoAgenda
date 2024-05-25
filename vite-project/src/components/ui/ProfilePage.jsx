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
      <div className="hidden xl:block mx-auto">
        <div className="items-center h-[100vh] pl-16 grid ml-80">
          <div className="w-[70rem] h-[46rem] bg-white rounded-2xl flex p-16 ">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img className="object-cover object-center h-32" src="./src/assets/imgs/pp.png" alt="Profile picture" />
            </div>
            <div className="mt-4 ml-20">
              {userData.map((item, index) =>
                <div className="grid grid-cols-2 text-left mt-10" key={index}>
                  <p className="text-xl mt-4 text-gray-500 text-left">{item.title}</p>
                  <p className="text-3xl">{item.info}</p>
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

      <div className="xl:hidden md:pl-60 fixed pt-20 h-screen">
        <div className=" px-10">
          <img
            className="mx-auto w-[30%] mt-5 pb-10"
            src="./src/assets/imgs/pp.png"
            alt="profile"
          />
          {userData.map((item, index) =>
            <div className="text-left mb-8 flex justify-between items-center w-full" key={index}>
              <p className="md:text-xl text-sm mt-1 text-gray-500">{item.title}</p>
              <p className="md:text-lg text-md pr-[5.25rem]">{item.info}</p>
            </div>
          )}
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
  );
}
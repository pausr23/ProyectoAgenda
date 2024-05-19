import { Navbar } from "../ui/Navbar.jsx";
import { Header } from "../ui/Header.jsx";
import { HomepageBtns } from "../ui/HomepageBtns.jsx";

export function Home() {
    return (
    <>
    <img className="absolute top-0 left-0 lg:w-1/2 md:w-full w-full h-full object-cover" src="./src/assets/imgs/square.png" alt="square" />
    <Navbar />
    <Header />
    <HomepageBtns />
    </>
)
}

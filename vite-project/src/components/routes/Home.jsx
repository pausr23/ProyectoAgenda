import { Navbar } from "../ui/Navbar.jsx";
import { Header } from "../ui/Header.jsx";
import { HomepageBtns } from "../ui/HomepageBtns.jsx";

/**
 * Renders the Home component.
 *
 * @return {JSX.Element} The rendered Home component.
 */
export function Home() {

    return (
            <>
                <img className="fixed top-0 left-0 lg:w-1/2 md:w-full w-full h-full object-cover" src="./src/assets/imgs/square.png" alt="square" />
                <Navbar />
                <Header />
                <HomepageBtns />
            </>
    )
}

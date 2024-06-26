import { SignupMenu } from "../ui/SignupMenu.jsx";

/**
 * Renders the signup component.
 *
 * @return {JSX.Element} The signup component.
 */
export function Signup() {

    return (
            <>
                <img className="fixed xl:block top-0 right-0 w-1/2 h-full hidden" src="./src/assets/imgs/square.png" alt="square" />
                <SignupMenu />
            </>
    )
}
import { LoginMenu } from "../ui/LoginMenu.jsx";

/**
 * Renders the Login component.
 *
 * @return {JSX.Element} The rendered Login component.
 */
export function Login() {
    
    return (
            <>
                <img className="xl:block lg:absolute top-0 right-0 w-1/2 h-full hidden " src="./src/assets/imgs/square.png" alt="square" />
                <LoginMenu />
            </>
    )
}
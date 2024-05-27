import "../../index.css";

import { useState } from "react";

/**
 * A custom hook that manages the state of a mobile checkbox.
 *
 * @return {Object} An object containing the current state of the checkbox and a function to update it.
 *         - mobileCheckboxChecked: A boolean indicating whether the checkbox is checked or not.
 *         - setMobileCheckboxChecked: A function that updates the state of the checkbox.
 */
    export const useCheckBox = () => {

        const [mobileCheckboxChecked, setMobileCheckboxChecked] = useState(false);

        return{
            mobileCheckboxChecked,
            setMobileCheckboxChecked
        };
    };
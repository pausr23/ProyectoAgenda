import "../../index.css";

import { useState } from "react";

    export const useCheckBox = () => {

        const [mobileCheckboxChecked, setMobileCheckboxChecked] = useState(false);

        return{
            mobileCheckboxChecked,
            setMobileCheckboxChecked
        };

    };
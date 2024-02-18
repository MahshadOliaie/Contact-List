import { createContext } from "react";


const PhoneNumberContext = createContext({
    number: "",
    numberSetter: () =>{}
})

export default PhoneNumberContext;
import { createContext } from "react";


const PhoneNumberContext = createContext({
    number: "",
    numberSetter: () =>{},
    logOutSetter: ()=>{}
})

export default PhoneNumberContext;
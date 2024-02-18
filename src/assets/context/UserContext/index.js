import { createContext } from "react";


const UserContext = createContext({
    isLoggedIn: false,
    loggedInSetter : ()=>{}
    
})

export default UserContext;
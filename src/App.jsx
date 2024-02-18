import { useState } from "react"
import PhoneNumberContext from "./assets/context/PhoneNumberContext"
import RandomUsers from "./components/RandomUsers/RandomUsers"
import LoginPage from "./components/loginPage/LoginPage/LoginPage"


function App() {
  const [number, setNumber] = useState("")

  function numberSetter(phone) {
    setNumber(phone)
  }

  return (
    <>
      <PhoneNumberContext.Provider value={{
        number,
        numberSetter: (params) => {
          numberSetter(params)
        }
      }}>
        {/* <RandomUsers /> */}
        <LoginPage/>  
      </PhoneNumberContext.Provider>
    </>
  )
}

export default App

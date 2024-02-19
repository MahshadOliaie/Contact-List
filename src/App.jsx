import { useEffect, useState } from "react"
import PhoneNumberContext from "./assets/context/PhoneNumberContext"
import RandomUsers from "./components/RandomUsers/RandomUsers"
import LoginPage from "./components/loginPage/LoginPage/LoginPage"
import MyHeader from "./components/MyHeader/MyHeader"
import UserContext from "./assets/context/UserContext"



function App() {
  const [number, setNumber] = useState(JSON.parse(localStorage.getItem("number")) || "")
  const [inputValue, setInputValue] = useState("")
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")) || false)


  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(data => { setUsers(data.results); setFilteredUsers(data.results) })

    return () => { };
  }, [])

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn))
    localStorage.setItem("number", JSON.stringify(number))
  }, [isLoggedIn , number])

  function loggedInSetter() {
    setIsLoggedIn(true)
  }

  function logOutSetter() {
    setIsLoggedIn(false)
  }

  function search() {
    let value = event.target.value
    setInputValue(value)
    console.log(value)


    let filter = []
    users.map(user => {
      let newName = `${user.name.first} ${user.name.last}`
      if (newName.startsWith(value.toUpperCase())) {
        filter.push(user)
      }
    })

    setFilteredUsers(filter)


  }


  function numberSetter(phone) {
    setNumber(phone)
  }

  return (
    <>
      <UserContext.Provider value={{
        isLoggedIn,
        loggedInSetter
      }}>
        <PhoneNumberContext.Provider value={{
          number,
          numberSetter: (params) => {
            numberSetter(params)
          },
          logOutSetter
        }}>

          {isLoggedIn ?
            <>
              <MyHeader inputValue={inputValue} onChange={search} />
              <RandomUsers users={users} filteredUsers={filteredUsers} setFilteredUsers={setFilteredUsers} />
            </>
            :
            <LoginPage />
          }

        </PhoneNumberContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App

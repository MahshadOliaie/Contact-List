import { useEffect, useState } from "react"
import PhoneNumberContext from "./assets/context/PhoneNumberContext"
import RandomUsers from "./components/RandomUsers/RandomUsers"
import LoginPage from "./components/loginPage/LoginPage/LoginPage"
import MyHeader from "./components/MyHeader/MyHeader"


function App() {
  const [number, setNumber] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(data => { setUsers(data.results); setFilteredUsers(data.results) })

    return () => { };
  }, [])


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
      <PhoneNumberContext.Provider value={{
        number,
        numberSetter: (params) => {
          numberSetter(params)
        }
      }}>
        <MyHeader inputValue={inputValue} onChange={search} />
        <RandomUsers users={users} filteredUsers={filteredUsers} setFilteredUsers={setFilteredUsers}/>
        {/* <LoginPage/>   */}
      </PhoneNumberContext.Provider>
    </>
  )
}

export default App

import { useEffect, useState } from "react";
import User from "./User";
import './randomusers.css'
import Gender from "./Gender";
import SkeletonUi from "./SkeletonUi/SkeletonUi";


function RandomUsers() {
    const [users, setUsers] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [filteredUsers, setFilteredUsers] = useState([])
    const [genderSelector, setGenderSelector] = useState("")


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

    function filterGender() {
        let gender = event.target.textContent
        let filter = []
        users.map(user => {
            if (user.gender == gender) {
                filter.push(user)
            }
        })

        setFilteredUsers(filter)
        setGenderSelector(gender)

    }

    return (
        <>
            <div className="toolbar">
                <input type="search" className="search" placeholder="search..." onChange={search} value={inputValue} />
                <div className="btns">
                    <Gender onClick={filterGender} genderSelector={genderSelector} gender="male" />
                    <Gender onClick={filterGender} genderSelector={genderSelector} gender="female" />
                </div>
            </div>
            <div className="userContainer">{
                (users.length > 0) ? filteredUsers.map((user, index) => {
                    return <User data={user} key={index} />
                }) : [...new Array(50)].map(item => {
                    return <SkeletonUi />
                })
            }
            </div>

        </>

    )

}

export default RandomUsers;
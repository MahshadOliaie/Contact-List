import { useEffect, useState } from "react";
import User from "./User";
import './randomusers.css'
import Gender from "./Gender";
import SkeletonUi from "./SkeletonUi/SkeletonUi";
import Search from "./Search";


function RandomUsers({users ,filteredUsers , setFilteredUsers}) {
   
    const [genderSelector, setGenderSelector] = useState("")


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
                <div className="btns">
                    <Gender onClick={filterGender} genderSelector={genderSelector} gender="male" />
                    <Gender onClick={filterGender} genderSelector={genderSelector} gender="female" />
                </div>
            </div>
            <div className="userContainer">{
                (users.length > 0) ? filteredUsers.map((user, index) => {
                    console.log(user)
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
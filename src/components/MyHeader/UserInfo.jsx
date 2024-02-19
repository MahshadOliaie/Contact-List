import { useContext } from "react"
import PhoneNumberContext from "../../assets/context/PhoneNumberContext"
import CSS from './myHeader.module.css'


function UserInfo({showInfo}){
    const {number , logOutSetter} = useContext(PhoneNumberContext)
    return(
        <div className={CSS.menu} id={(showInfo)? `${CSS["show"]}` : `${CSS["hide"]}`}>
            <p className={CSS.number}>{number}</p>
            <p className={CSS.logoutBtn} onClick={logOutSetter}>Log Out</p>
        </div>
    )
}

export default UserInfo
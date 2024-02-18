import { useContext } from 'react'
import Search from '../RandomUsers/Search'
import CSS from './myHeader.module.css'
import PhoneNumberContext from '../../assets/context/PhoneNumberContext'

function MyHeader({inputValue , onChange}){
    const {number} = useContext(PhoneNumberContext)
    return (
        <div className={CSS.header}>
            <p className={CSS.loginBtn}>{number}</p>
            <Search inputValue={inputValue} onChange={onChange}  />
        </div>
    )
}

export default MyHeader
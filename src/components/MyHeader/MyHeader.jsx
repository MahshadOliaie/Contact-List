import Search from '../RandomUsers/Search'
import CSS from './myHeader.module.css'

function MyHeader({inputValue , onChange}){
    return (
        <div className={CSS.header}>
            <p className={CSS.loginBtn}>LOGIN</p>
            <Search inputValue={inputValue} onChange={onChange}  />
        </div>
    )
}

export default MyHeader
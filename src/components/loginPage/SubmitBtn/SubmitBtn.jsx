import CSS from './submitBtn.module.css'

function SubmitBtn({content , state , onClick}){
    return(
        <p className={CSS.submit} id={CSS[state]} onClick={onClick}>{content}</p>
    )
}

export default SubmitBtn
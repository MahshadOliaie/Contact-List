import { useRef } from "react";
import CSS from './codePage.module.css'


function CodeInput({ getCode }) {
    let Ref = useRef(null)

    function setCode() {
        getCode(Ref.current.value)
    }

    return (
        <input type="text" className={CSS.otp} id='otp' placeholder="code" maxLength={6} ref={Ref} onChange={setCode} />
    )
}

export default CodeInput;
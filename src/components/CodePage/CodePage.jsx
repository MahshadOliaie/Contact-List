
import PhoneNumberContext from '../../assets/context/PhoneNumberContext'
import UserContext from '../../assets/context/UserContext'
import SubmitBtn from '../loginPage/SubmitBtn/SubmitBtn'
import CodeInput from './CodeInput'
import Timer from './Timer'
import CSS from './codePage.module.css'
import React, { useContext, useEffect, useState } from 'react'

function CodePage({ setIsPhoneEntered }) {
    const [OTP, setOTP] = useState("")
    const [expire, setExpire] = useState(false)
    const [inputCode, setInputCode] = useState("")
    const [warning, setWarning] = useState("")
    const { number } = useContext(PhoneNumberContext)
    const { loggedInSetter } = useContext(UserContext)
    const [reMount, setReMount] = useState(false)
    const [time, setTime] = useState(120)

    useEffect(() => {
        let otp = Math.floor((Math.random() * 1000000) + 10000)
        setOTP(otp)
        console.log(otp)
        return () => { }
    }, [reMount])



    function numberPage() {
        setIsPhoneEntered(false)
    }

    function remount() {
        setTime(120)
        setExpire(false)
        setReMount((prev) => !prev)
    }

    function updateInputCode(inputCode) {
        setInputCode(inputCode)
        setWarning("")
    }

    function checkCode() {
        event.preventDefault()
        if (inputCode == OTP) {
            loggedInSetter()
        }

        if (inputCode == "")
            setWarning("please enter the code!!")


        if (inputCode.length > 0 && inputCode != OTP)
            setWarning("wrong code!!!")
    }


    return (
        <div className={CSS.body}>
            <div className={(warning == "success") ? `${CSS.container} ${CSS.success}` : `${CSS.container}`}>
                {(warning == "success") ? <p>loged in</p> :
                    <>
                        <h1 className={CSS.title}>Enter Code</h1>
                        <form className={CSS.form}>
                            <p className={CSS.number}>{number}</p>
                            <div className={CSS.codeInput}>
                                <CodeInput getCode={(inputCode) => updateInputCode(inputCode)} />
                                <Timer setExpire={setExpire} time={time} setTime={setTime} />
                                <p className={CSS.warning}>{warning}</p>
                            </div>
                            {(expire) ? <SubmitBtn content={"Resend Code"} onClick={remount} /> : <SubmitBtn content={"Done"} onClick={checkCode} />}
                        </form>
                        <p className={CSS.editPhoneNumber} onClick={numberPage}>Wrong Number?</p>
                    </>}
            </div>
        </div>
    )
}

export default CodePage
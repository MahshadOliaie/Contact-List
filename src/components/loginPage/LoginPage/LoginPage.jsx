import { useContext, useState } from 'react';
import PhoneNumberInput from '../PhoneNumberInput/PhoneNumberInput';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import CSS from './loginPage.module.css'
import CodePage from '../../CodePage/CodePage';
import React from 'react'
import PhoneNumberContext from '../../../assets/context/PhoneNumberContext';

function LoginPage() {
    const [inputValue, setInputValue] = useState("")
    const [submitState, setSubmitState] = useState("notActive")
    const { numberSetter } = useContext(PhoneNumberContext)
    const [isPhoneEntered, setIsPhoneEntered] = useState(false)

    function checkNumber() {
        let value = event.target.value
        if (((value.match(/^\d{1,}$/)) && value.startsWith("9")) || value == "") {
            setInputValue(value)
        }
        if (value.length == 10) {
            setSubmitState("active")
        }
        else
            setSubmitState("notActive")
    }

    function submit() {
        event.preventDefault()
        numberSetter(`+98${inputValue}`)
        setIsPhoneEntered(true)
    }

    return (

        <>
            {isPhoneEntered ?
                <CodePage setIsPhoneEntered={setIsPhoneEntered} />
                :
                <div className={CSS.body}>
                    <div className={CSS.container}>
                        <h1 className={CSS.title}>Login</h1>
                        <form className={CSS.form}>
                            <PhoneNumberInput value={inputValue} onChange={checkNumber} />
                            <SubmitBtn content={"Send Code"} onClick={submit} state={submitState} />
                            <p className={CSS.goToSignUp}>Create an account</p>
                        </form>
                    </div>
                </div>
            }
        </>

    )
}

export default LoginPage;
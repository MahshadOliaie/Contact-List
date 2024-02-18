import { useEffect, useState, React } from "react"
import CSS from './codePage.module.css'


function Timer({ setExpire , time , setTime }) {

    useEffect(() => {
        let timer
        if (time > 0) {
            timer = setTimeout(() => {
                setTime((prev) => (prev - 1))
            }, 1000)
        }

        return () => { clearTimeout(timer) }
    }, [time])

    if (time == 0) {
        setExpire(true)
    }

    return (
        <p className={CSS.timer}>0{(Math.floor(time / 60))}:{(Math.ceil(time % 60) < 10) ? "0" : ""}{Math.ceil(time % 60)}</p>
    )
}

export default Timer;
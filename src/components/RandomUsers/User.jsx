import { useState } from 'react';
import './randomusers.css'
import Icon from './Icon';

function User(Props) {
    const { picture, name, email, location, dob, phone } = Props.data
    let d = new Date(dob.date)
    let obj = {
        "name": `${name.first} ${name.last}`,
        "email": email,
        "address": `${location.street.number} ${location.street.name} St`,
        "birthday": d.toLocaleDateString(),
        "phone": phone,
    }

    const [info, setInfo] = useState("name")
    const [svgState, setSvgState] = useState("name")
    
    function handleClick(title) {
        setInfo(title)
        setSvgState(title)
    }
    return (
        <>
            <div className="userCard">
                <div className="img"><img src={picture.large} alt="" /></div>
                <div className="about">
                    <p className="title">My <span>{info}</span> is</p>
                    <h1 className="titleInfo">{obj[info]}</h1>
                </div>
                <div className="icons">
                    <Icon onclick={(path)=> handleClick(path)} currentTitle={svgState} path="name" />
                    <Icon onclick={(path)=> handleClick(path)} currentTitle={svgState} path="email" />
                    <Icon onclick={(path)=> handleClick(path)} currentTitle={svgState} path="address" />
                    <Icon onclick={(path)=> handleClick(path)} currentTitle={svgState} path="birthday" />
                    <Icon onclick={(path)=> handleClick(path)} currentTitle={svgState} path="phone" />
                </div>
            </div>
        </>
    )
}

export default User;
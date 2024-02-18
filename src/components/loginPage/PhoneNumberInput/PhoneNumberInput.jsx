
import CSS from './phoneNumberInput.module.css'

function PhoneNumberInput({value , onChange}) {
    return (
        <div className={CSS.phoneNumber}>
            <select name="prefix" id={CSS["prefix"]}>
                <option value="iran">+98</option>
            </select>
            <input type="text" id={CSS["phoneNumber"]} value={value} placeholder='Phone Number' maxLength={10} onChange={onChange} />
        </div>
    )
}

export default PhoneNumberInput;


function Gender({ onClick, gender, genderSelector }) {

    return (
        <button onClick={() => { onClick(); selectBtn() }} className={(genderSelector == gender) && "activeBtn"}>{gender}</button>
    )
}

export default Gender;
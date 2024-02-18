

function Search({onChange ,inputValue}){
    return(
        <input type="search" className="search" placeholder="search..." onChange={onChange} value={inputValue} />
    )
}

export default Search;
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar= () => {

    // let navigate = useNavigate()

    // let collectionInfo = sessionStorage.getItem("collecion")

    // const initialState = {
    //     searchText: ''
    // }

    // const [formState, setFormState] = useState(initialState)

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(formState)
        
    //     // use the formState information to change the url
    //     navigate(`${collectionInfo}/${formState.searchText}`)

    //     setFormState(initialState)
    // }

    // const handleChange = (e) => {
    //     sessionStorage.setItem(`${[e.target.id]}`, `${[e.target.value]}`)
    // }

    // const collectionChange = (e) => {
    //     setDisplayInfo({
    //         ...displayInfo, [e.target.id]: e.target.value})
    // }


    return (
        <div className="search-bar-div">
             {/* <select className="select-box" id="collection" onChange={collectionChange} value={collectionInfo}>
                <option value="planets">Planets</option>
                <option value="moons">Moons</option>
                <option value="space-bodies">Space Bodies</option>
            </select>
            <form onSubmit={handleSubmit}>
                <input className="search-text" type="text" id="searchText" onChange={handleChange} value={formState.searchText}/>
                <button className="search-button" type="submit">Search</button>
            </form> */}
        </div>
    )
}

export default SearchBar
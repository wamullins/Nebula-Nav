import React, { useState, useContext } from 'react'
import DataContext from '../DataContext'
import { useNavigate } from 'react-router-dom'

const SearchBar= () => {

    const { displayInfo, setDisplayInfo } = useContext(DataContext)

    let navigate = useNavigate()

    const initialState = {
        searchText: ''
    }

    const [formState, setFormState] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formState)
        
        // use the formState information to change the url
        navigate(`${displayInfo.collection}/${formState.searchText}`)

        setFormState(initialState)
    }

    const handleChange = (e) => {
        setFormState({...formState, [e.target.id]: e.target.value})
    }

    const collectionChange = (e) => {
        setDisplayInfo({
            ...displayInfo, [e.target.id]: e.target.value})
    }


    return (
        <div className="search-bar-div">
             <select className="select-box" id="collection" onChange={collectionChange} value={displayInfo.collection}>
                <option value="planets">Planets</option>
                <option value="moons">Moons</option>
                <option value="space-bodies">Space Bodies</option>
            </select>
            <form onSubmit={handleSubmit}>
                <input className="search-text" type="text" id="searchText" onChange={handleChange} value={formState.searchText}/>
                <button className="search-button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar
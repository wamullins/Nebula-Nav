import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar= () => {

    let navigate = useNavigate()

    const initialState = {
        collectionType: '',
        searchText: ''
    }

    const [searchState, setSearchState] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searchState)
        
        // use the searchState information to change the url
        navigate(`${searchState.collectionType}/${searchState.searchText}`)
        setSearchState(initialState)
    }

    const handleChange = (e) => {
        setSearchState({...searchState, [e.target.id]: e.target.value})
        console.log(searchState)
    }


    return (
        <div className="search-bar-div">
            <form onSubmit={handleSubmit}>
                <select className="select-box" id="collection" onChange={handleChange} value={searchState.collectionType}>
                    <option value="planets">Planets</option>
                    <option value="moons">Moons</option>
                    <option value="space-bodies">Space Bodies</option>
                </select>
                <input className="search-text" type="text" id="searchText" onChange={handleChange} value={searchState.searchText}/>
                <button className="search-button" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar
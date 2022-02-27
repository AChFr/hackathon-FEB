import teams from "./../Data/teams.json"
import './style.css'
import Searchbar from "../Components/SearchBar/Searchbar"
import SearchResult from "../Components/SearchResult/Searchresult"
import { useState } from "react"

const Marketpage = () => {

    const data = []
    teams.map(elm => {
        data.push(...elm.Players)
    })

    const [playersList, setPlayersList] = useState(data);
    const [playersCopy, setCopy] = useState(data)

    function filter(str) {

        let filteredPlayers

        str ? filteredPlayers = playersCopy.filter(elm => elm.name.includes(str)) : filteredPlayers = playersCopy

        setPlayersList(filteredPlayers)
    }

    return (
        <div className="background">
            <h1 className="text-center">Mercado</h1>
            <Searchbar filter={filter} />
            <SearchResult playersList={playersList} />
        </div>
    )
}

export default Marketpage
import Cardplayer from "../Cardplayer/Cardplayer"
import { Link } from "react-router-dom"

const SearchResult = ({ playersList }) => {

    return (
        <div>
            {playersList.map(elm => {
                return (
                    <Link to={`/details/${elm.name}`} key={elm.name}> <Cardplayer {...elm} /></Link>
                )
            })}
        </div>
    )
}

export default SearchResult
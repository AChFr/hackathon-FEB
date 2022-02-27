import Cardplayer from "../Cardplayer/Cardplayer"

const SearchResult = ({ playersList }) => {

    return (
        <div>
            {playersList.map(elm => {

                return <div key={elm.name}><Cardplayer {...elm} /></div>
            })}

        </div>


    )

}

export default SearchResult
import './Cardteam.css'
import { Card, Image } from "react-bootstrap"
import teams from "./../../Data/teams.json"
const Cardteam = () => {

    const myTeam = teams[0]

    return (
        <a href='https://asobal.es/equipos/BAR/' target="_blank">
            <Card className="cardTeam">
                <Image src={myTeam.img} />
                <Card.Title>{myTeam.name}</Card.Title>
            </Card></a>
    )
}

export default Cardteam
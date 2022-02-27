import './Card.css'
import { Card, Image } from "react-bootstrap"
import roleCheck from "./../../Utils/index"
const Cardplayer = (props) => {

    console.log(props.position)
    const role = roleCheck(props.position)
    console.log(role)


    return (
        <Card className="card">
            <Image fluid variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{role}</Card.Subtitle>
                <Card.Text>{props.playerCost}
                </Card.Text>
                <Card.Text>{props.playerScore}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cardplayer
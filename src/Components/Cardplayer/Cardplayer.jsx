import './Cardplayer.css'
import { Card, Image } from "react-bootstrap"
import roleCheck from "./../../Utils/index"

const Cardplayer = (props) => {

    const role = roleCheck(props.position)

    return (
        <Card className="card cardPlayer">
            <div className='player'>
                <Image className='playerImg' fluid src={props.img} />
                <Image className='teamImg' fluid src={props.team.img} />
            </div>
            <div className='mx-4'>
                <Card.Title>{props.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{role}</Card.Subtitle>
            </div>
            <div className='playerCost'>
                <Card.Text>{props.playerCost}</Card.Text>
            </div>
        </Card>
    )
}

export default Cardplayer
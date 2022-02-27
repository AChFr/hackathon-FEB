import './NextMatch.css'
import { Card, Image } from "react-bootstrap"
import timetable from "./../../Data/timetable.json"

const Nextmatch = () => {

    return (
        <Card className="cardMatch">
            {timetable.map(elm => {
                return (
                    <article key={elm.Date}>
                        <section variant="flush"
                            className='d-flex flex-row justify-content-around align-items-center'>
                            <Image src={elm.Local.img} />
                            <h3>{elm.Local.name}</h3>
                            <h3 className='vs'>VS</h3>
                            <h3>{elm.Visiting.name}</h3>
                            <Image src={elm.Visiting.img} />
                        </section>
                        <div>
                            <p>Pabellón: <span>{elm.Stadium}</span></p>
                            <p>{elm.Date}</p>
                        </div>
                    </article>
                )
            })}
        </Card >
    )
}

export default Nextmatch
import { Container } from "react-bootstrap"
import Logpage from "./LogPage"
import Signpage from "./SignPage"
import Homepage from "./HomePage"
import Marketpage from "./MarketPage"

import PlayerDetails from "./PlayerDetails"

const Mainpage = () => {

    return (
        <>
            <Container>
                <Logpage />
                <Signpage />
                <Homepage />
                <Marketpage />

                <PlayerDetails />
            </Container>
        </>
    )
}

export default Mainpage
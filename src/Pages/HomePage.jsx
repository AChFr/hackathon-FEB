import Navbar from "../Components/Navbar/Navbar"
import Cardteam from "../Components/Cardteam/Cardteam"
import Nextmatch from "../Components/NextMatch/NextMatch"
import Carousel from "../Components/Carousel/Carousel"

const Homepage = () => {
    return (
        <div className="background">
            <h1>Home</h1>
            <h2>Mi equipo</h2>
            <Cardteam />

            <h2>Siguientes partidos</h2>
            <Nextmatch />

            <h2>Noticias</h2>
            <Carousel />

            <Navbar />
        </div>
    )
}

export default Homepage
import MyTeam from '../Components/MyTeam/MyTeam'
import Navbar from '../Components/Navbar/Navbar'
import './style.css'

const MyTeamPage = () => {
    return (
        <div className="background">
            <h1 className="text-center">Mi equipo</h1>
            <MyTeam />
            <Navbar />
        </div>
    )
}

export default MyTeamPage
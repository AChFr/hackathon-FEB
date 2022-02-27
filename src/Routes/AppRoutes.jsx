import { Routes, Route } from 'react-router-dom'
import LoadingScreen from '../Components/LoadingScreen/LoadingScreen'
import Homepage from '../Pages/HomePage'
import LoadingPage from '../Pages/LoadingPage'
import Logpage from '../Pages/LogPage'
import MyTeamPage from '../Pages/MyTeamPage'
import Marketpage from '../Pages/MarketPage'
import Playerdetail from '../Pages/PlayerDetails'
import Signpage from '../Pages/SignPage'

const AppRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<LoadingPage />} />
                <Route path="/register" element={< Signpage />} />
                <Route path="/log-in" element={<Logpage />} />
                <Route path="/home" element={<Homepage />} />
                <Route path="/market" element={<Marketpage />} />
                <Route path="/my-team" element={<MyTeamPage />} />
                <Route path="/details/:id" element={<Playerdetail />} />
            </Routes>
        </>
    )
}

export default AppRoutes
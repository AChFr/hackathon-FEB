import { Routes, Route } from 'react-router-dom'
import Mainpage from '../Pages/MainPage'

const AppRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Mainpage />} />
            </Routes>
        </>
    )
}

export default AppRoutes
import { Link } from "react-router-dom"
import { Image } from "react-bootstrap"
import "./LoadingScreen.css"

const LoadingScreen = () => {

    return (
        <div className="loadingImg">
            <Link to="/register"><Image className="img-fluid" fluid src="./assets/asobalImage1.png" /></Link>
        </div>
    )
}

export default LoadingScreen
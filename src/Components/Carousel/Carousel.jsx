import { useState } from "react"
import { Link } from "react-router-dom"
import './Carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Carousel = () => {

    const new1 = {
        img: "./assets/new1.png",
        url: "https://asobal.es/noticias/bidasoa-avanza-al-last16--logrono-depende-de-si-mismo/7146/"
    }

    const new2 = {
        img: "./assets/new2.png",
        url: "https://asobal.es/noticias/bidasoa-y-logrono-afrontan-una-nueva-final-en-la-ehf-european-league-/7145/"
    }

    const new3 = {
        img: "./assets/new3.png",
        url: "https://asobal.es/noticias/martin-gayo---nico-debutante-en-el-7-ideal/7144/"
    }

    const new4 = {
        img: "./assets/new4.png",
        url: "https://asobal.es/noticias/samuel-ibanez-y-david-iglesias--protagonistas-de-la-mejor-parada-y-el-mejor-gol/7143/"
    }

    const images = [new1, new2, new3, new4]

    let [i, setI] = useState(0)
    let [imgSrc, setImgSrc] = useState(images[i].img)
    let [urlSrc, setUrlSrc] = useState(images[i].url)

    const next = () => {

        let j = i + 1
        if (j > 3) { j = 0 }

        setImgSrc(images[j].img)
        setUrlSrc(images[j].url)
        setI(j)
    }

    const previous = () => {

        let j = i - 1
        if (j < 0) { j = 3 }

        setImgSrc(images[j].img)
        setUrlSrc(images[j].url)
        setI(j)
    }

    return (
        <article className="carousel">
            <button onClick={previous}><FontAwesomeIcon icon={faAngleLeft} /></button>
            <a href={urlSrc} target="_blank"><img src={imgSrc} alt="news" /></a>
            <button onClick={next}><FontAwesomeIcon icon={faAngleRight} /></button>
        </article>
    )
}

export default Carousel
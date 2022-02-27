import './Searchbar.css'
import { Form, Button, Card } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Searchbar = ({ filter }) => {

    function handleInput(e) {
        filter(e.target.value)

    }



    return (
        <Form className='formSearch'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type={"search"} placeholder={"Busca tu jugador"} onChange={handleInput}></input>
        </Form>
    )
}

export default Searchbar
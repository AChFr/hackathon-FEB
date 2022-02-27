import "./log-in-form.css"
import { Form, Image, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const LogIn = () => {

    return (
        <Form className="form text-center">
            <Image className="img-fluid" fluid src="./assets/asobalImage1.png" />

            <Form.Group className="mb-3 text-start" controlId="LogUserInput">
                <Form.Label className="label">Nombre de usuario</Form.Label>
                <Form.Control className="input" type="email" placeholder="Nombre de usuario" />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="LogPwdInput" >
                <Form.Label>Contraseña</Form.Label>
                <Form.Control className="input" type="password" placeholder="Contraseña" />
            </Form.Group>

            <Button className="button" variant="info" type="submit">
                Iniciar Sesión
            </Button>
            <br />
            <Form.Text><span>¿No tienes cuenta aún? </span></Form.Text>
            <Link to="#"> Regístrate</Link>
        </Form>
    )
}

export default LogIn
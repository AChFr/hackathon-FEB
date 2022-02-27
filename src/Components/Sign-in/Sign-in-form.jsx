import "./Sign-in-form.css"
import { Form, Button, Image } from "react-bootstrap"
import { Link } from "react-router-dom"

const SignIn = () => {

    return (

        <Form className="form text-center" >
            <Image className="img-fluid" fluid src="./assets/asobalImage1.png" />

            <Form.Group className="mb-3 text-start" controlId="usernameInput">
                <Form.Label className="label">Nombre de usuario</Form.Label>
                <Form.Control className="input" type="email" placeholder="Nombre de usuario" />
            </Form.Group>

            <Form.Group className="mb-3 text-start" controlId="emailInput">
                <Form.Label className="label">Correo electrónico</Form.Label>
                <Form.Control className="input" type="email" placeholder="Correo electrónico" />
            </Form.Group>


            <Form.Group className="mb-3 text-start" controlId="pwdInput" >
                <Form.Label className="label">Contraseña</Form.Label>
                <Form.Control className="input" type="password" placeholder="Contraseña" />
            </Form.Group>


            <Form.Group className="mb-3 text-start" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Deseo suscribirme al boletín de ASOBAL" />
            </Form.Group>

            <Link to="/log-in"> <Button className="button" variant="info" type="submit">
                Registrarse
            </Button></Link>
        </Form>

    )
}

export default SignIn
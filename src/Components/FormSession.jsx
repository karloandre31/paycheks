import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";
import PopoverTrigger from "./PopoverTrigger";
import { useActivePasswordStore } from "../JS/database/store/zustand";
import emailAutentication from "../JS/Firesbase/Login/email-autentication";
import {
  createUserPassAndEmail,
  emailAndPassword,
} from "../JS/Firesbase/Login/email-and-password";

function FormSession() {
  const [send, setSend] = useState(false);
  const [form, setForm] = useState(false);
  const passwordStore = useActivePasswordStore((state) => state.passwordStore);
  const changeStatePassword = useActivePasswordStore(
    (state) => state.changeStatePassword
  );

  //Active the emailAccount
  const emailAccount = (event) => {
    event.preventDefault();

    //recibo el click del formulario
    const target = event.target;
    //recopilo los datos del formulario
    const formData = new FormData(target);
    //recibo los nombres de los atributos de cada boton para condicionar las acciones
    const buttonClicked = event.nativeEvent.submitter.getAttribute("name");

    buttonClicked === "create-account"
      ? createAccount(formData)
      : loginAccount(formData);
  };

  const createAccount = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    password !== ""
      ? emailAutentication(email)
      : createUserPassAndEmail(email, password);

    setSend(true);
  };
  const loginAccount = (formData) => {
    const email = formData.get("email");
    const password = formData.get("password");
    password !== ""
      ? emailAutentication(email)
      : emailAndPassword(email, password);

    setSend(true);
  };

  return (
    <Container>
      <p>{form === false ? "Primero" : "Segundo"}</p>
      {!send && (
        <Form onSubmit={emailAccount}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={"auto"} xs="auto">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@gmail.com"
                  name="email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Col>
            </Row>
            <Row>
              <Col md="auto" xs="auto">
                <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  label="Autenticación sin contraseña"
                  checked={passwordStore}
                  onChange={changeStatePassword}
                />
              </Col>
              <Col>
                <PopoverTrigger
                  firstMessage={"?"}
                  popoverHeader={"¿Que es esto?"}
                  popoverBody={`
                    La autenticación sin contraseña y con vínculo de correo electrónico, 
                    significa que necesitas autorizar la entrada al sistema desde tu correo
                    electronico, a este le llegará un link para autorizar el ingreso, 
                    esto reemplaza a la contraseña para poder ingresar.
                    `}
                />
              </Col>
            </Row>
            <Row>
              <Col md="auto" xs="auto">
                {!passwordStore && (
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="*******"
                      name="password"
                      required
                    />
                  </Form.Group>
                )}
              </Col>
            </Row>
          </Form.Group>
          <Button variant="primary" type="submit" className="mr-3" name="login">
            Iniciar Sesion
          </Button>
          <Button type="submit" variant="info" name="create-account">
            Crear cuenta
          </Button>
        </Form>
      )}
    </Container>
  );
}

export default FormSession;

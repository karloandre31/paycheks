import { Button, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Form } from "react-bootstrap";
import PopoverTrigger from "./PopoverTrigger";
import { useActivePasswordStore } from "../JS/database/store/zustand";

function FormSession() {
  const [send, setSend] = useState(false);
  //const [activePassword, setActivePassword] = useState();
  const passwordStore = useActivePasswordStore((state) => state.password);
  const changeStatePassword = useActivePasswordStore(
    (state) => state.changeStatePassword
  );

  //Active the emailAccount
  const emailAccount = (formEmail) => {
    const email = formEmail.get("email");
    const password = formEmail.get("password");
    password !== "";
    setSend(true);
  };

  //Activar o desactivar el metodo con contraseña *****
  /* const switchPassword = () => {

  }; */

  return (
    <Container>
      {!send && (
        <Form action={emailAccount}>
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
                      placeholder="Password"
                      name="password"
                      required
                    />
                  </Form.Group>
                )}
              </Col>
            </Row>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Container>
  );
}

export default FormSession;

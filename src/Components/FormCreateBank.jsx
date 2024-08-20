import { Button, Form } from "react-bootstrap";
import { useBankStore } from "../JS/database/store/zustand";

function FormCreateBank() {
  const {setBanks} = useBankStore();
  const formCreateBank = (event) => {
    event.preventDefault();

    //recibo el click del formulario
    const target = event.target;
    //recopilo los datos del formulario
    const formData = new FormData(target);
    //recibo los nombres de los atributos de cada boton para condicionar las acciones
    const buttonClicked = event.nativeEvent.submitter.getAttribute("name");
    const bankName = formData.get("bank");
    setBanks(bankName);
  };
  return (
    <div>
      <Form onSubmit={formCreateBank}>
        <Form.Group className="mb-3" controlId="formBasicForBank">
          <Form.Label>Banco:</Form.Label>
          <Form.Control type="text" placeholder="Pichincha" name="bank" required/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormCreateBank;

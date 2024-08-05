import { Button, Form } from "react-bootstrap";
import { addNewChek } from "../../JS/Firesbase/CRUD/create-check-and-bank";

function FormForChecks() {
  const formCreateCheck = (event) => {
    event.preventDefault();

    //recibo el click del formulario
    const target = event.target;
    //recopilo los datos del formulario
    const formData = new FormData(target);
    //recibo los nombres de los atributos de cada boton para condicionar las acciones
    const buttonClicked = event.nativeEvent.submitter.getAttribute("name");
    const numeroDeCheque = formData.get("numeroDeCheque");
    const proveedor = formData.get("proveedor");
    const fecha = formData.get("fecha");
    const monto = formData.get("monto");
    const infoCheque = {
      numeroDeCheque,
      proveedor,
      fecha,
      monto,
    };
    //addNewChek(infoCheque);
  };
  return (
    <div>
      <Form onSubmit={formCreateCheck} className="flex justify-around">
        <Form.Group className="mb-3" controlId="formBasicForBank">
          <Form.Label>Numero de cheque:</Form.Label>
          <Form.Control
            type="number"
            placeholder="1999"
            name="numeroDeCheque"
            min={1}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicForBank">
          <Form.Label>Proveedor:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Repuestos pirulo"
            name="proveedor"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicForBank">
          <Form.Label>Fecha:</Form.Label>
          <Form.Control type="date" name="fecha" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicForBank">
          <Form.Label>Monto:</Form.Label>
          <Form.Control
            type="number"
            placeholder="$200.00"
            name="monto"
            min={1}
            step={0.01}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="py-4">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormForChecks;

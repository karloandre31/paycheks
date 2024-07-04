import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";


//Mensaje para mostrar, poniendo encima el cursor
const PopoverTrigger = ({
  firstMessage,
  popoverHeader,
  popoverBody,
}) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{popoverHeader}</Popover.Header>
      <Popover.Body>{popoverBody}</Popover.Body>
    </Popover>
  );
  return (
    <div>
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="success">{firstMessage}</Button>
      </OverlayTrigger>
    </div>
  );
};

export default PopoverTrigger;

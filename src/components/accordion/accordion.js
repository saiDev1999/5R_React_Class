import Accordion from "react-bootstrap/Accordion";
import { ImageComponent } from "../image/imageComponent";
import CustomProgressBar from "../progress-bar/progress-bar";
import CustomSpinner from "../spinner/spinner";

function CustomAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Image #1</Accordion.Header>
        <Accordion.Body>
          <CustomSpinner />
          <ImageComponent />
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Image #2</Accordion.Header>
        <Accordion.Body>
          <CustomSpinner />
          <ImageComponent />
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CustomAccordion;

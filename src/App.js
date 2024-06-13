import ButtonComponent from "./components/button/button.js";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./components/heading/headings.js";
import { ImageComponent } from "./components/image/imageComponent.js";
import {
  ListParentOrdered,
  ListParentUnordered,
} from "./components/list/listParent.js";
import { Card } from "./components/card/card.js";

const App = () => {
  const greeting = "Good morning ram";
  return (
    <>
      <h3>Hai 3:11pm code commit</h3>
      <h3>{greeting}</h3>
      {[1].map((num, index) => (
        <Card key={index}></Card>
      ))}
    </>
  );
};

export default App;

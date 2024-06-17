import CustomAccordion from "../accordion/accordion";

const FirstComponent = () => {
  return (
    <>
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>My First Bootstrap Page</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-4">
            <h3>Book 1</h3>
            <CustomAccordion />
          </div>
          <div className="col-sm-4">
            <h3>Book 2</h3>
            <CustomAccordion />
          </div>
          <div className="col-sm-4">
            <h3>Book 3</h3>
            <CustomAccordion />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstComponent;

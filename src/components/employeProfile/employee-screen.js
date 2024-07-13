import { useState } from "react";
import Heading1 from "../heading/headings";

const EmployeeScreen = () => {
  const [flag, setFlag] = useState(false);
  return (
    <>
      <Heading1 />
      <button onClick={() => setFlag(!flag)}>Flag change</button>
      {flag ? <h2>Flag is true</h2> : <h2>Flag is false</h2>}
    </>
  );
};

export default EmployeeScreen;

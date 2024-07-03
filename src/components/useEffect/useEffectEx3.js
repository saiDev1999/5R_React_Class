import React, { useEffect } from "react";

function UseEffectEx3() {
  useEffect(() => {
    window.addEventListener("mousemove", captureMouse);

    return () => {
      // clean up , prevent leak

      window.removeEventListener("mousemove", captureMouse);
    };
  }, []);

  const captureMouse = (event) => {
    console.log(event.clientX, "X-AXIS");
    console.log(event.clientY, "Y-AXIS");
  };

  return <div>UseEffectEx3</div>;
}

export default UseEffectEx3;

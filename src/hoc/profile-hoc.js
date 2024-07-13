import { useEffect, useState } from "react";

const addProfileHoc = (WrappedComponent) => {
  return (props) => {
    const [data, setData] = useState({});
    useEffect(() => {
      //API
      const data = {
        name: "ram",
        salary: 9000,
      };
      setData(data);
    }, []);
    return <WrappedComponent data={data} {...props} />;
  };
};

export default addProfileHoc;

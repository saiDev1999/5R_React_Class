const Heading1 = (prop) => {
  const { title } = prop;
  return <h1>{title}</h1>;
};
export default Heading1;

export const Heading2 = () => {
  return <h2>Hello world h2</h2>;
};

export const Heading3 = (prop) => {
  const { title } = prop;
  return <h3>{title}</h3>;
};

export const Heading4 = () => {
  return <h4>Hello world h4</h4>;
};

export const Heading5 = () => {
  return <h5>Hello world h5</h5>;
};

export const Heading6 = (prop) => {
  console.log(prop, "props");
  const { children } = prop;
  return <>{children}</>;
};

const Greeting = (prop) => {
  const { children, name } = prop;

  console.log(name);
  return (
    <>
      <h5>How are you {name}</h5>

      {children}
    </>
  );
};

export default Greeting;

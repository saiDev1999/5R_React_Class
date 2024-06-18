export const ImageComponent = (prop) => {
  console.log(prop, "prop");
  return <img src={prop.src} width={100} height={100} alt="shirt" />;
};

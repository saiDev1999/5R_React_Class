export const ImageComponent = (prop) => {
  const { src, width, height, alt } = prop;
  return <img {...prop} />;
};

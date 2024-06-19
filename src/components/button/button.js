import "./button.css";
import styles from "./button.module.css";

const ButtonComponent = (prop) => {
  const buttonStyle = { color: "red", backgroundColor: "green" };

  const { text, bgColor, onPress, width, height } = prop;
  return (
    <button
      onClick={onPress}
      className={styles.buttonCss}
      style={{ backgroundColor: bgColor, width: width, height: height }}
    >
      {text}
    </button>
  );
};
export default ButtonComponent;

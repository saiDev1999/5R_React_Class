import "./button.css";
import styles from "./button.module.css";

const ButtonComponent = (prop) => {
  const buttonStyle = { color: "red", backgroundColor: "green" };

  const { text = "button", bgColor, onPress, height } = prop;
  return (
    <button
      onClick={onPress}
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 mx-3 rounded"
    >
      {text}
    </button>
  );
};
export default ButtonComponent;

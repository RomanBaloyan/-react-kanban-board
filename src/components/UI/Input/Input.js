import styles from "./Input.module.css";

const Input = ({ type, value, placeholder, onChange, onKeyUp }) => {
  return (
    <input
      className={styles.Input}
      type={type || "text"}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      onKeyUp={onKeyUp}
    />
  );
};

export default Input;

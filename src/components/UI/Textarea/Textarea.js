import styles from "./Textarea.module.css";

const Textarea = ({ value, name, onChange }) => {
  return (
    <textarea
      className={styles.Textarea}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

export default Textarea;

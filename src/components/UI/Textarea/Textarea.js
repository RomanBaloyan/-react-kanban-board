import styles from "./Textarea.module.css";

const Textarea = ({ value, onChange }) => {
  return (
    <textarea className={styles.Textarea} onChange={onChange} value={value} />
  );
};

export default Textarea;

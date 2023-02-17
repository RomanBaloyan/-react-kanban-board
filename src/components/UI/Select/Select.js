import styles from "./Select.module.css";

const Select = ({ onChange, options }) => {
  return (
    <select
      className={styles.Select}
      onChange={onChange}
      defaultValue={""}
      required
    >
      <option value="">Select a task</option>
      {options?.map((option) => {
        return (
          <option key={option.id} value={option.id}>
            {option.title}
          </option>
        );
      })}
    </select>
  );
};

export default Select;

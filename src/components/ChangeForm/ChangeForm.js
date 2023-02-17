import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Textarea from "../UI/Textarea/Textarea";
import styles from "./ChangeForm.module.css";
import { useContext, useState } from "react";
import { AppContext } from "../../context";
import { ReactComponent as CloseIcon } from "../../assets/images/close.svg";
import Backdrop from "../UI/Backdrop/Backdrop";

const ChangeForm = ({ task, handleClose }) => {
  const { dispatch } = useContext(AppContext);

  const [fields, setFields] = useState({
    title: task.title,
    description: task.description,
  });

  const handleChange = (e) => {
    if (e.target.tagName === "TEXTAREA") {
      setFields({
        ...fields,
        description: e.target.value,
      });
    } else if (e.target.tagName === "INPUT") {
      setFields({
        ...fields,
        title: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fields.title) {
      alert("Title cannot be empty");
      return;
    }

    const changedTask = {
      title: fields.title,
      description: fields.description,
      id: task.id,
    };

    dispatch({
      type: "CHANGE_TASK",
      payload: { changedTask },
    });

    handleClose();
  };

  return (
    <>
      <div className={styles.ChangeForm}>
        <form onSubmit={handleSubmit}>
          <div className={styles.header}>
            <h3 className={styles.title}>Edit task</h3>
            <button className={styles.close} onClick={handleClose}>
              <CloseIcon />
            </button>
          </div>
          <Input value={fields.title} onChange={handleChange} />
          <Textarea value={fields.description} onChange={handleChange} />
          <Button appearance={"light"} type="submit">
            Submit
          </Button>
        </form>
      </div>
      <Backdrop onClick={handleClose} />
    </>
  );
};

export default ChangeForm;

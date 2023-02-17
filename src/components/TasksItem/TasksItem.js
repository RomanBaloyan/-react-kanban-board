import { Link } from "react-router-dom";
import styles from "./TasksItem.module.css";
import { ReactComponent as RemoveIcon } from "../../assets/images/close.svg";
import { useContext, useRef } from "react";
import { AppContext } from "../../context";

const TasksItem = ({ id, title }) => {
  const { dispatch } = useContext(AppContext);
  const buttonRef = useRef(null);

  const deleteTask = (e) => {
    if (!buttonRef.current?.contains(e.target)) {
      return;
    }

    e.preventDefault();
    dispatch({
      type: "DELETE_TASK",
      payload: { taskId: id },
    });
  };

  return (
    <li className={styles.TasksItem}>
      <Link to={`/tasks/${id}`} className={styles.link} onClick={deleteTask}>
        {title}
        <button ref={buttonRef} className={styles.remove}>
          <RemoveIcon />
        </button>
      </Link>
    </li>
  );
};

export default TasksItem;

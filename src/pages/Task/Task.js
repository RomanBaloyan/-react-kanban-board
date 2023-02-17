import styles from "./Task.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context";
import Button from "../../components/UI/Button/Button";
import ChangeForm from "../../components/ChangeForm/ChangeForm";
import { ReactComponent as CloseIcon } from "../../assets/images/close.svg";

const Task = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useContext(AppContext);
  const [task, setTask] = useState({});
  const [isFormVisible, setFormVisible] = useState(false);

  const getTaskById = (id) => {
    const category = state.find((category) =>
      category.tasks.some((task) => task.id === id)
    );
    return category.tasks.find((task) => task.id === id);
  };

  useEffect(() => {
    setTask(getTaskById(id));
  }, [state]);

  const showForm = () => {
    setFormVisible(true);
  };

  const closeForm = () => {
    setFormVisible(false);
  };

  return (
    <div className={styles.Task}>
      <div className={styles.wrapper}>
        {isFormVisible && <ChangeForm task={task} handleClose={closeForm} />}
        <div className={styles.header}>
          <h1 className={styles.title}>{task.title}</h1>
          <button className={styles.close} onClick={() => navigate(-1)}>
            <CloseIcon />
          </button>
        </div>
        <p>{task.description || "This task has no description"}</p>
        <Button appearance={"light"} onClick={showForm}>
          ✎ Edit
        </Button>
      </div>
    </div>
  );
};

export default Task;

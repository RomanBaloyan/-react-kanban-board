import styles from "./TasksList.module.css";
import TasksItem from "../TasksItem/TasksItem";

const TasksList = ({ tasks }) => {
  return (
    <ul className={styles.TasksList}>
      {tasks?.map((task) => {
        return <TasksItem key={task.id} title={task.title} id={task.id} />;
      })}
    </ul>
  );
};

export default TasksList;

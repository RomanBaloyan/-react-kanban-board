export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TASK":
      return state.map((category) => {
        if (category.status === 0) {
          return {
            ...category,
            tasks: [...category.tasks, payload.newTask],
          };
        } else return category;
      });

    case "MOVE_TASK": {
      const movedTask = state[payload.currentCategoryStatus - 1].tasks.find(
        (task) => task.id === payload.taskId
      );

      return state.map((category) => {
        if (category.status === payload.currentCategoryStatus - 1) {
          return {
            ...category,
            tasks: category.tasks.filter((task) => task.id !== payload.taskId),
          };
        } else if (category.status === payload.currentCategoryStatus) {
          return {
            ...category,
            tasks: [...category.tasks, movedTask],
          };
        } else return category;
      });
    }

    case "CHANGE_TASK":
      return state.map((category) => {
        if (category.tasks.some((task) => task.id === payload.changedTask.id)) {
          return {
            ...category,
            tasks: category.tasks.map((task) => {
              if (task.id === payload.changedTask.id) {
                return payload.changedTask;
              } else {
                return task;
              }
            }),
          };
        } else return category;
      });

    case "DELETE_TASK":
      return state.map((category) => {
        if (category.tasks.some((task) => task.id === payload.taskId)) {
          return {
            ...category,
            tasks: category.tasks.filter((task) => task.id !== payload.taskId),
          };
        } else return category;
      });

    default:
      return state;
  }
};

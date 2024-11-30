import { useEffect, useState } from "react";
import HeatMap from "./HeatMap";
import AddTask from "./AddTask";
import DailyUpdateForm from "./DailyUpdateForm";

//temporary function to be replaced with real data from db
const fillDailyValues = (isBool: boolean): (number | boolean)[] => {
  console.log("filling daily values");
  const dailyValues = [];

  for (let i = 0; i < 365; i++) {
    if (isBool) {
      dailyValues.push(i % 2 === 0);
    } else {
      dailyValues.push(Math.floor(Math.random() * 9));
    }
  }
  return dailyValues;
};

export interface Task {
  taskName: string;
  isBoolean: boolean;
  taskUnit: string | null; // null if isBoolean is true
}

export interface DailyValues {
  taskName: string;
  values: (number | boolean)[]; // length of 365
}

const HeatMapSection = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      taskName: "example task",
      isBoolean: false,
      taskUnit: "hours"
    },
    {
      taskName: "another task",
      isBoolean: true,
      taskUnit: null
    },
    {
      taskName: "one more task",
      isBoolean: false,
      taskUnit: "hours"
    }
  ]);
  const [dailyValues, setDailyValues] = useState<DailyValues[]>([
    { taskName: "example task", values: [1] },
    { taskName: "another task", values: [true] },
    { taskName: "one more task", values: [1] },
  ]);

  useEffect(() => {
    const newDailyValues = tasks.map((task) => {
      return {
        taskName: task.taskName,
        values: fillDailyValues(task.isBoolean)
      }
    });
    setDailyValues(newDailyValues);
  }, []);
  
  useEffect(() => {
    console.log(tasks);
    const newDailyValues = tasks.map((task) => {
      return {
        taskName: task.taskName,
        values: fillDailyValues(task.isBoolean),
      }
    });
    setDailyValues(newDailyValues);
  }, [tasks]);

  useEffect(() => {
    console.log(dailyValues);
  }, [dailyValues]);

  const handleTaskNameChange = (prevName: string, newName: string) => {
    const newTasks = tasks.map(task =>
      task.taskName === prevName ? { ...task, taskName: newName } : task
    );
    setTasks(newTasks);
  }

  const handleTaskAdd = (taskName: string, isBool: boolean, taskUnit: string) => {
    // console.log(taskName);
    setTasks([...tasks, { taskName, isBoolean: isBool, taskUnit: taskUnit }]);
  }

  return (
    <div className="">
      <div className="flex gap-6">
        <DailyUpdateForm tasks={tasks} />
        <AddTask updateTasksList={handleTaskAdd} />
      </div>
      {tasks.map((task, idx) =>
        <div key={idx} className="">
          <HeatMap taskName={task.taskName} changeTaskName={handleTaskNameChange} dailyValues={dailyValues[idx]} />
        </div>)}
    </div>
  )
}

export default HeatMapSection;
import { useState } from "react";
import HeatMap from "./HeatMap";
import AddTask from "./AddTask";
import DailyUpdateForm from "./DailyUpdateForm";

export interface Task {
  taskName: string;
  isBoolean: boolean;
  taskUnit: string | null; // null if isBoolean is true
}

// need array of daily tasks with a value for each day. 
// index could just be day of year
// only data needed from task is the days value with deffault of 0
// value is either a number or a boolean
// could call it dailyTaskData

const dailyTaskData = [];

for (let i = 0; i < 365; i++) {
  dailyTaskData.push();
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

  const exampleDailyValues: { taskName: string, values: (number | boolean)[] }[] = [
    { taskName: "example task", values: [1] },
    { taskName: "another task", values: [true] },
    { taskName: "one more task", values: [1] },
  ]

const fillDailyValues = (isBool: boolean): (number | boolean)[] => {
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


  exampleDailyValues[0].values = fillDailyValues(false);
  exampleDailyValues[1].values = fillDailyValues(true);
  exampleDailyValues[2].values = fillDailyValues(false);

  const handleTaskNameChange = (prevName: string, newName: string) => {
    const newTasks = tasks.map(task =>
      task.taskName === prevName ? { ...task, taskName: newName } : task
    );
    setTasks(newTasks);
  }

  const handleTaskAdd = (taskName: string) => {
    setTasks([...tasks, { taskName, isBoolean: false, taskUnit: "hours" }]);
  }

  return (
    <div className="">
      <div className="flex gap-6">
        <DailyUpdateForm tasks={tasks} />
        <AddTask updateTasksList={handleTaskAdd} />
      </div>
      {tasks.map((task, idx) =>
        <div key={idx} className="">
          <HeatMap taskName={task.taskName} changeTaskName={handleTaskNameChange} dailyValues={exampleDailyValues[exampleDailyValues.findIndex(value => value.taskName === task.taskName)]} />
        </div>)}
    </div>
  )
}

export default HeatMapSection;
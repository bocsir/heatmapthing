import { useState } from "react";
import HeatMap from "./HeatMap";
import AddTask from "./AddTask";

// interface Tasks {
//     [key: string]: {
//         taskName: string;
//         isBoolean: boolean;
//         taskUnit: string | null; // null if isBoolean is true
//     }
// }

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
    const [taskNames, setTaskNames] = useState<string[]>(["example task", "another task", "one more task"]);
    // const [tasks, setTasks] = useState<Tasks>({
    //     "example task": {
    //         taskName: "example task",
    //         isBoolean: false,
    //         taskUnit: "hours"
    //     },
    //     "another task": {
    //         taskName: "another task",
    //         isBoolean: true,
    //         taskUnit: null
    //     },
    //     "one more task": {
    //         taskName: "one more task",
    //         isBoolean: false,
    //         taskUnit: "hours"
    //     }
    // });

    const handleTaskNameChange = (prevName: string, newName: string) => {
      const newTaskNames = [...taskNames];
      const idx = taskNames.indexOf(prevName);
      newTaskNames[idx] = newName;
      setTaskNames(newTaskNames);
    }

    const handleTaskAdd = (taskName: string) => {
        setTaskNames([...taskNames, taskName]);
    }

    return (
      <div className="md:ml-12">
        <AddTask updateTasksList={handleTaskAdd} />
        {taskNames.map((taskName, idx) => 
          <div key={idx} className="">
            <HeatMap taskName={taskName} changeTaskName={handleTaskNameChange}/>
          </div>)}
      </div>
    )
}

export default HeatMapSection;



//need to automatically import react in tsconfig.json file
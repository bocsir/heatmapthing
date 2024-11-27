import { useState } from "react";
import HeatMap from "./HeatMap";

const HeatMapSection = () => {
    const [taskNames, setTaskNames] = useState<string[]>(["example task", "another task", "one more task"]);

    const handleTaskNameChange = (prevName: string, newName: string) => {
      const newTaskNames = [...taskNames];
      const idx = taskNames.indexOf(prevName);
      newTaskNames[idx] = newName;
      setTaskNames(newTaskNames);
    }

    return (
      <div className="md:ml-12">
        {taskNames.map((taskName, idx) => 
          <div key={idx} className="">
            <HeatMap taskName={taskName} changeTaskName={handleTaskNameChange}/>
          </div>)}
      </div>
    )
}

export default HeatMapSection;
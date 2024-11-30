import { useState } from "react";

interface AddTaskProps {
    updateTasksList: (newTaskName: string) => void;
}

const AddTask = ({updateTasksList}: AddTaskProps) => {
    const [newTaskName, setNewTaskName] = useState("");


    return (
        <form
            className={"flex gap-3"} 
            onSubmit={(e) => {
                e.preventDefault();
                updateTasksList(newTaskName)
            }}>
            <input className="text-black pl-2" type="text" placeholder="Task Name" value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)}/>
            <button type="submit">Add Task</button>
        </form>
    )
}

export default AddTask;
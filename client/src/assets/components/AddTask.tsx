import { useState } from "react";

interface AddTaskProps {
    updateTasksList: (newTaskName: string) => void;
}

const AddTask = ({ updateTasksList }: AddTaskProps) => {
    const [newTaskName, setNewTaskName] = useState("");


    return (
        <div className="mb-3">
            <h2 className="text-lg font-semibold">Add a Task</h2>
            <form
                className="flex flex-col gap-3 rounded border border-neutral-400 p-3 w-min"
                onSubmit={(e) => {
                    e.preventDefault();
                    updateTasksList(newTaskName)
                }}>
                <div className="flex items-center h-[24px] gap-3">
                    <input className="pl-2 h-full bg-black border rounded text-lg border-neutral-400" type="text" placeholder="Task Name" value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
                    <button className="bg-violet-600 aspect-square font-bold text-lg h-full rounded border" type="submit" >+</button>
                </div>
                <div className="flex items-center h-[24px] gap-3">
                    <label className="text-lg">task type</label>
                    <select className="bg-black border rounded border-neutral-400 pl-2 h-full">
                        <option value="boolean">boolean</option>
                        <option value="number">number</option>
                    </select>

                </div>
            </form>

        </div>
    )
}

export default AddTask;
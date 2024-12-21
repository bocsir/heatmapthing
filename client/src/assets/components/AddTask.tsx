import { useState } from "react";

interface AddTaskProps {
    updateTasksList: (newTaskName: string, isBool: boolean, unit: string) => void;
}

const AddTask = ({ updateTasksList }: AddTaskProps) => {
    const [newTaskName, setNewTaskName] = useState<string>("");
    const [newTaskIsBool, setnewTaskIsBool] = useState<boolean>(false);
    const [newTaskUnit, setNewTaskUnit] = useState<string>("");

    return (
        <div className="my-3 rounded-sm border p-3 pt-1 w-min border-neutral-400">
            <h2 className="text-xl font-semibold pb-2">Add a Task</h2>
            <form
                className="flex flex-col gap-3"
                onSubmit={(e) => {
                    e.preventDefault();
                    updateTasksList(newTaskName, newTaskIsBool, newTaskUnit);
                    setNewTaskName("");
                    setnewTaskIsBool(false);
                    setNewTaskUnit("");
                }}>
                <div className="flex items-center h-[24px] gap-3">
                    <label className="text-lg">name:</label>
                    <input className="pl-2 h-full bg-black border rounded text-lg border-neutral-400" type="text" placeholder="" value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
                </div>
                <div className="flex items-center h-[24px] gap-3">
                    <label className="text-lg">type:</label>
                    <select className="text-lg bg-black border rounded border-neutral-400 pl-2 h-full" value={(newTaskIsBool) ? "boolean" : "number"} onChange={(e) => setnewTaskIsBool(e.target.value === "boolean")}>
                        <option value="boolean">boolean</option>
                        <option value="number">number</option>
                    </select>
                </div>
                {!newTaskIsBool && (
                    <div className="flex items-center h-[24px] gap-3">
                        <label className="text-lg">unit:</label>
                        <select className="text-lg bg-black border rounded border-neutral-400 pl-2 h-full" value={newTaskUnit} onChange={(e) => setNewTaskUnit(e.target.value)}>
                            <option value="hours">hours</option>
                            <option value="minutes">minutes</option>
                            <option value="amount">amount</option>                            
                        </select>
                        {/* <input className="pl-2 h-full bg-black border rounded text-lg border-neutral-400" type="text" placeholder="Task Unit" value={newTaskUnit} onChange={(e) => setNewTaskUnit(e.target.value)} /> */}
                    </div>
                )}
                <button type="submit" className="hover:border-neutral-400 hover:text-neutral-200 shadow-[inset_0_0_0_#000000] hover:shadow-[inset_0px_0px_10px_#000000] transition-all duration-300 bg-violet-600 w-fit px-6 font-bold text-lg h-full rounded border" >add task</button>


            </form>

        </div>
    )
}

export default AddTask;
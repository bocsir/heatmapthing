import { useState } from 'react';
import { Task } from './HeatMapSection';

interface DailyUpdateFormProps {
    tasks: Task[];
}

const DailyUpdateForm = ({ tasks }: DailyUpdateFormProps) => {
    const [selectedTask, setSelectedTask] = useState<Task | null>(tasks[0]);
    const [newValue, setNewValue] = useState<string>('');

    return (
        <div className="my-3 rounded border p-3 pt-1 w-fit border-neutral-400">
            <h2 className="text-xl font-semibold pb-2">Daily Update:</h2>
            <form className="flex flex-col gap-3 text-lg">
                <div className="flex gap-3 items-center h-[24px]">
                    <label className="h-full">task</label>
                    <select className="bg-black border rounded border-neutral-400 pl-2 h-full" value={selectedTask?.taskName || ''} onChange={(e) => setSelectedTask(tasks.find(task => task.taskName === e.target.value) || null)}>
                        {tasks.map((task, idx) =>
                            <option key={idx} value={task.taskName}>{task.taskName}</option>
                        )}
                    </select>
                </div>
                <div className="flex gap-3 items-center h-[24px]">
                    {selectedTask?.isBoolean ? (
                        <>
                            <label className="h-full">done</label>
                            <input type="checkbox" className="accent-violet-600"/>
                        </>
                    ) : (
                        <>
                            <label className="h-full">value</label>
                            <input className="pl-2 h-full w-12 bg-black border rounded border-neutral-400" type="text" placeholder="0"/>
                        </>
                    )}
                </div>
                <button type="submit" className="hover:border-neutral-400 hover:text-neutral-200 shadow-[inset_0_0_0_#000000] hover:shadow-[inset_0px_0px_10px_#000000] transition-all duration-300 bg-violet-600 w-fit px-6 font-bold text-lg h-full rounded border" >submit</button>
            </form>
        </div>
    )
}

export default DailyUpdateForm;
import TaskNameInput from "./TaskNameInput";
// import { getDaysInYear, getMonthLabels, getDayLabels } from "../utils/dateUtils";
import { getDaysInYear } from "../utils/dateUtils";

interface HeatMapProps {
    taskName: string;
    changeTaskName: (prevName: string, newName: string) => void;
}

interface Day {
    toDateString: () => string;
}

const HeatMap = (props: HeatMapProps) => {
    const daysInYear: Day[] = getDaysInYear();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <div className="mt-6 w-fit max-w-[900px] overflow-x-auto">
            <TaskNameInput {...props} />
            <div className="flex w-full justify-between pr-[55px] mt-2">
                {months.map((month, idx) => 
                   <p key={idx}>{month}</p>
            )}
            </div>
            <div className="grid grid-rows-7 grid-flow-col gap-1 pt-1 overflow-y-hidden">
                {daysInYear.map((day, index) => (
                    <div key={index}>
                        <div
                            className="w-4 h-4 bg-neutral-400 relative rounded-sm group"
                        >
                            <span className={`absolute z-10 bottom-full mb-1 hidden group-hover:flex bg-violet-600  font-extrabold rounded-sm px-1 w-24 ${day.toDateString().toLowerCase().includes('dec') && "-ml-16"}`}>
                                {day.toDateString().slice(0, day.toDateString().length - 5)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HeatMap;
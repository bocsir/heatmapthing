import { useState } from "react";
import TaskNameInput from "./TaskNameInput";
// import { getDaysInYear, getMonthLabels, getDayLabels } from "../utils/dateUtils";
import { getDaysInYear } from "../utils/dateUtils";

interface HeatMapProps {
    taskName: string;
    changeTaskName: (prevName: string, newName: string) => void;
    dailyValues: { taskName: string, values: (number | boolean)[] };
}

interface Day {
    toDateString: () => string;
}

// will need to go through dailyValues and divide it by the max number, * 10, round to whole number
const maxValue = 23;

const colorMap: { [key: number]: string } = {
    1: "bg-amber-100",
    2: "bg-amber-200",
    3: "bg-amber-300",
    4: "bg-amber-400",
    5: "bg-amber-500",
    6: "bg-amber-600",
    7: "bg-amber-900",
    8: "bg-amber-900",
    9: "bg-pink-500",
  };

const HeatMap = (props: HeatMapProps) => {
    const [dailyValues, setdailyValues] = useState<(number | boolean)[]>(props.dailyValues.values);
    const daysInYear: Day[] = getDaysInYear();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <div className="">
            <TaskNameInput {...props} />
            <div className="min-w-content max-w-[900px] overflow-x-scroll pb-4 mb-2" style={{ scrollbarWidth: 'thin' }}>
                <div className="w-fit pr-6">
                    <div className="flex justify-between w-full pr-[55px] mt-2">
                        {months.map((month, idx) =>
                            <p key={idx}>{month}</p>
                        )}
                    </div>
                    <div className="grid grid-rows-7 grid-flow-col gap-1">
                        {daysInYear.map((day, index) => (
                            <div key={index}>
                                <div
                                    className={`w-4 h-4 relative rounded-sm group 
                                        ${(typeof dailyValues[0] === 'boolean') ? (
                                            (dailyValues[index] ? "bg-green-600" : "bg-neutral-400")
                                        ) : (
                                            // bg-violet-${typeof dailyValues[index] === 'number' ? dailyValues[index] * 100 : 0}
                                            ((typeof dailyValues[index] === 'number') && (dailyValues[index] > 0) ? `${colorMap[dailyValues[index]]}` : "bg-neutral-400")
                                        )}
                                    `}
                                >
                                    <span className={`absolute z-10 bottom-full mb-1 hidden group-hover:flex bg-violet-600 font-extrabold rounded-sm px-1 w-24 ${day.toDateString().toLowerCase().includes('dec') && "-ml-16"}`}>
                                        {day.toDateString().slice(0, day.toDateString().length - 5)}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    );
}

export default HeatMap;

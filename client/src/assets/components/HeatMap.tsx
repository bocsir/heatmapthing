import TaskNameInput from "./TaskNameInput";
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
// const maxValue = 23;

const colorMap: { [key: number]: string } = {
    0: "bg-indigo-50",
    1: "bg-indigo-100",
    2: "bg-indigo-200",
    3: "bg-indigo-300",
    4: "bg-indigo-400",
    5: "bg-indigo-500",
    6: "bg-indigo-600",
    7: "bg-indigo-700",
    8: "bg-indigo-800",
    9: "bg-indigo-900",
  };

const HeatMap = (props: HeatMapProps) => {
    let dailyValues: (number | boolean)[];
    const { dailyValues: { values = [] } = { values: [] } } = props; 

    if (values.length === 0) {
        dailyValues = new Array(365).fill(false);
    } else {
        dailyValues = values;
    }
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
                            <div key={index} className="">
                                <div
                                    className={`w-4 h-4 relative rounded-sm group active:border-2 
                                        ${(typeof dailyValues[0] === 'boolean') ? (
                                            (dailyValues[index] ? "bg-green-600" : "bg-neutral-400")
                                        ) : (
                                            ((typeof dailyValues[index] === 'number') ? 
                                            `${colorMap[dailyValues[index]]}` :
                                            "")
                                        )}
                                    `}
                                >
                                    <div className={`absolute z-10 bottom-full mb-1 hidden group-hover:flex bg-black border text-neutral-200 font-extrabold rounded-sm w-max px-2 justify-center ${day.toDateString().toLowerCase().includes('dec') && "-ml-28"}`}>
                                        <p>{`${day.toDateString().slice(0, day.toDateString().length - 5)}`}
                                            <span className="text-white">{typeof dailyValues[0] !== 'boolean' ? ` : ${dailyValues[index]}` : ''}</span>
                                        </p>
                                    </div>
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

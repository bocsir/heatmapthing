import { useState, useRef, useEffect } from 'react';

const TaskNameInput = () => {
    const [taskName, setTaskName] = useState<string>('example task');
    const [width, setWidth] = useState<number>(0);
    const spanRef = useRef<HTMLSpanElement>(null); //for width calculation
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            inputRef.current?.blur();
        }
    };

    useEffect(() => {
        let newWidth = spanRef.current?.offsetWidth || 0;
        newWidth *= 1.7;
        setWidth(newWidth);
    }, [taskName]);


    return (
        <div>
            <span ref={spanRef} className="invisible absolute">
                {taskName.split(' ').join('\u00A0')}
            </span>
            <input
                ref={inputRef}
                className="pl-2 ml-2 focus:outline-none focus:bg-neutral-700 rounded-t min-w-12 bg-transparent border-b border-neutral-400 text-white text-2xl"
                style={{ width: `${width}px` }}
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>

    );
}

export default TaskNameInput;
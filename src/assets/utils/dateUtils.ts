
export const getDaysInYear = () => {
    const days = [];
    const start = new Date(new Date().getFullYear(), 0, 1);
    console.log(start);
    const end = new Date(new Date().getFullYear(), 11, 31);
    for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
        days.push(new Date(d));
    }
    return days;
};

export const getMonthLabels = () => {
    return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"];
};

export const getDayLabels = () => {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
};

export const getDaysInYear = () => {
    const days = [];
    const start = new Date(new Date().getFullYear(), 0, 1);
    const end = new Date(new Date().getFullYear(), 11, 31);
    for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
        days.push(new Date(d));
    }
    return days;
};

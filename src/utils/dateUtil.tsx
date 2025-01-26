export const formatDateTime = (): string => {
    const now = new Date();

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",
    ];

    const day = dayNames[now.getDay()];
    const date = now.getDate();
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";

    const formattedTime = `${hours % 12 || 12}:${minutes}${ampm}`;
    return `${day} ${date}${getOrdinalSuffix(date)} ${month}, ${year} ${formattedTime}`;
};

const getOrdinalSuffix = (day: number): string => {
    if (day > 3 && day < 21) return "th"; // Catch 11th, 12th, 13th
    switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};

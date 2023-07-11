// Convert 12hrs to 24hrs time

const convert12to24 = (time12h) => {
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes] = time.split(":");

    if (hours === "12") hours = "00";

    if (modifier === "PM") hours = parseInt(hours) + 12;

    return `${hours}:${minutes}`;
};

console.log(convert12to24("02:02 PM")); // 14:02
console.log(convert12to24("04:06 PM")); // 16:06
console.log(convert12to24("12:00 PM")); // 12:00
console.log(convert12to24("12:00 AM")); // 00:00

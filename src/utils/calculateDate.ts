export const calculateDate = (targetTimestamp) => {
    const currentTimestamp = new Date().getTime();

    // Calculate the difference in milliseconds
    const difference = targetTimestamp - currentTimestamp;

    // Calculate days, hours, and minutes
    const millisecondsPerMinute = 60 * 1000;
    const millisecondsPerHour = 60 * millisecondsPerMinute;
    const millisecondsPerDay = 24 * millisecondsPerHour;
    
    const days = Math.floor(difference / millisecondsPerDay);
    const remainingMilliseconds = difference % millisecondsPerDay;
    const hours = Math.floor(remainingMilliseconds / millisecondsPerHour);
    const remainingMilliseconds2 = remainingMilliseconds % millisecondsPerHour;
    const minutes = Math.floor(remainingMilliseconds2 / millisecondsPerMinute);
    
    return {
        days: days < 0 ? 0 : days,
        hours: hours < 0 ? 0 : hours,
        minutes: minutes < 0 ? 0 : hours
    }
}

export const getPercentage = (startDate, endDate) => {
    const currentDate = new Date().getTime();
    const totalMilliseconds = endDate - startDate;
    const elapsedMilliseconds = currentDate - startDate;
    const result = Number(((elapsedMilliseconds / totalMilliseconds) * 100).toFixed(2));
    
    return result > 100 ? 100 : result;
}
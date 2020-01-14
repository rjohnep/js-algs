const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime,durationMinutes) {
    const dayStartNumber = Number(dayStart.replace(/:/, ''));
    const dayEndNumber = Number(dayEnd.replace(/:/, ''));
    const startTimeNumber = Number(startTime.replace(/:/, ''));
    const durationMinutesNumber = Number(durationMinutes);

    if(
      Number.isNaN(dayStartNumber) 
      || Number.isNaN(dayEndNumber)
      || Number.isNaN(startTimeNumber)
      || Number.isNaN(durationMinutesNumber)
      ) {
       throw new Error('Look at time format!'); 
    }

    const endTimeNumber = startTimeNumber + durationMinutesNumber;

    return (startTimeNumber >= dayStartNumber && startTimeNumber < dayEndNumber)
      && (endTimeNumber > dayStartNumber && endTimeNumber <= dayEndNumber);
}

scheduleMeeting("7:00",15),     // false
scheduleMeeting("07:15",30),    // false
scheduleMeeting("7:30",30),     // true
scheduleMeeting("11:30",60),    // true
scheduleMeeting("17:00",45),    // true
scheduleMeeting("17:30",30),    // false
scheduleMeeting("18:00",15)    // false

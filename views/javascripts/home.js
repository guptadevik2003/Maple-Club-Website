console.log('Hello & Welcome to Maple Club.')

const timeEle = document.getElementById('time')

const startTime = 1650048000000 // In Milliseconds

setInterval( async () => {
    
    const timeNow = Date.now()

    const timeElapsed = timeNow - startTime
    
    const timeFormatted = await PrettyTime(timeElapsed)
    
    timeEle.textContent = timeFormatted
    
}, 1000);

async function PrettyTime (MilliSecondArg) {

    // Milliseconds to Time Object
    var millisecondsObj = Math.floor((MilliSecondArg % 1000) / 100)
    var secondsObj = Math.floor((MilliSecondArg / 1000) % 60)
    var minutesObj = Math.floor((MilliSecondArg / (1000 * 60)) % 60)
    var hoursObj = Math.floor((MilliSecondArg / (1000 * 60 * 60)) % 24)
    var daysObj = Math.floor(MilliSecondArg / (1000 * 60 * 60 * 24))

    // Adding an extra 0 to Single Digits, ex: 7 seconds to 07 seconds
    daysObj = (daysObj < 10) ? "0" + daysObj : daysObj
    hoursObj = (hoursObj < 10) ? "0" + hoursObj : hoursObj
    minutesObj = (minutesObj < 10) ? "0" + minutesObj : minutesObj
    secondsObj = (secondsObj < 10) ? "0" + secondsObj : secondsObj

    // Final Time Object
    var timeObject = {
        milliseconds: millisecondsObj,
        seconds: secondsObj,
        minutes: minutesObj,
        hours: hoursObj,
        days: daysObj
    }

    // Time Object to Formatted Time ////////// ( NEW ) //////////
    let timeFormatted
    timeFormatted = `${timeObject.days} : ${timeObject.hours} : ${timeObject.minutes} : ${timeObject.seconds}`
    return timeFormatted

    // // Time Object to Formatted Time ////////// ( DEPRECATED ) //////////
    // var secondsFrmt = `${timeObject.seconds} ${timeObject.seconds <= 1 ? 'Sec' : 'Secs'}`
    // var minutesFrmt = `${timeObject.minutes} ${timeObject.minutes <= 1 ? 'Min' : 'Mins'}`
    // var hoursFrmt = `${timeObject.hours} ${timeObject.hours <= 1 ? 'Hour' : 'Hrs'}`
    // var daysFrmt = `${timeObject.days} ${timeObject.days <= 1 ? 'Day' : 'Days'}`
    // let timeFormatted
    // if (MilliSecondArg < 1000 * 60) {
    //     timeFormatted = `${secondsFrmt}`
    // }
    // if (MilliSecondArg < 1000 * 60 * 60 && MilliSecondArg >= 1000 * 60) {
    //     timeFormatted = `${minutesFrmt}︲${secondsFrmt}`
    // }
    // if (MilliSecondArg < 1000 * 60 * 60 * 24 && MilliSecondArg >= 1000 * 60 * 60) {
    //     timeFormatted = `${hoursFrmt}︲${minutesFrmt}︲${secondsFrmt}`
    // }
    // if (MilliSecondArg >= 1000 * 60 * 60 * 24) {
    //     timeFormatted = `${daysFrmt}︲${hoursFrmt}︲${minutesFrmt}︲${secondsFrmt}`
    // }
    // return timeFormatted

}

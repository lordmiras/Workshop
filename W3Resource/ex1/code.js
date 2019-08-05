let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
if (hour < 10) hour = "0" + hour;
if (min < 10) min = "0" + min;
if (sec < 10) sec = "0" + sec;

document.getElementById("day").innerHTML = week[date.getDay()] + '.';
document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
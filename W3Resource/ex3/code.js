let date = new Date(),
    day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear();
if (day < 10) day = "0" + day;
if (month < 10) month = "0" + month;

document.getElementById("date").innerHTML = day + '.' + month + '.' + year;
// get references of the html elements holding the clock pointers
const hourPointer = document.querySelector("#hour");
const minutePointer = document.querySelector("#minute");
const secondPointer = document.querySelector("#second");

// fetch current date
const currentDate = new Date();

// get time elements to use in the clock
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
let currentSecond = currentDate.getSeconds();

// create the position of each pointer, in degress
let hourPosition = (currentHour * 360) / 12 + (currentMinute * (360 / 60)) / 12;
let minutePosition = (currentMinute * 360) / 60 + (currentSecond * (360 / 60)) / 60;
let secondPosition = (currentSecond * 360) / 60;

// run and update the clock pointer values
const runClock = () => {

    // update time positions
    hourPosition = hourPosition + 3 / 360;
    minutePosition = minutePosition + 6 / 60;
    secondPosition = secondPosition + 6;

    // rotate each SVG pointer element according to the update values from the date
    hourPointer.style.transform = "rotate(" + hourPosition + "deg)";
    minutePointer.style.transform = "rotate(" + minutePosition + "deg)";
    secondPointer.style.transform = "rotate(" + secondPosition + "deg)";
};

// update the clock each second
setInterval(runClock, 1000);
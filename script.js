const DaysEl =document.getElementById('days');
const hoursEl =document.getElementById('hours');
const minutesEl =document.getElementById('minutes');
const SecondsEl =document.getElementById('seconds');


const newYears = '1 Sep 2024';

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/3660/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    //console.log(days , hours , minutes , seconds);

    DaysEl.innerHTML = days;
    hoursEl.innerHTML= hours;
    minutesEl.innerHTML = minutes;
    SecondsEl.innerHTML = seconds;
}


//initial call
countdown();

setInterval(countdown,1000);

